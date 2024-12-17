import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useSession } from "@supabase/auth-helpers-react";
import { supabase } from "@/integrations/supabase/client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import CartItemsList from "./cart/CartItemsList";
import ShippingAddressForm from "./cart/ShippingAddressForm";
import { useState } from "react";

const CartDialog = () => {
  const session = useSession();
  const queryClient = useQueryClient();
  const [showShippingForm, setShowShippingForm] = useState(false);

  const { data: cartItems } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("user_cart")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      return data;
    },
    enabled: !!session,
  });

  const updateQuantityMutation = useMutation({
    mutationFn: async ({ id, quantity }: { id: string; quantity: number }) => {
      const { error } = await supabase
        .from("user_cart")
        .update({ quantity })
        .eq("id", id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: () => {
      toast.error("Failed to update quantity");
    },
  });

  const deleteItemMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from("user_cart")
        .delete()
        .eq("id", id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      toast.success("Item removed from cart");
    },
    onError: () => {
      toast.error("Failed to remove item");
    },
  });

  const checkoutMutation = useMutation({
    mutationFn: async (shippingAddress: string) => {
      if (!session?.user?.id || !cartItems || cartItems.length === 0) {
        throw new Error("No items in cart");
      }

      const totalAmount = cartItems.reduce((acc, item) => acc + (item.quantity * 99.99), 0);

      const { data: order, error: orderError } = await supabase
        .from("orders")
        .insert({
          user_id: session.user.id,
          total_amount: totalAmount,
          shipping_address: shippingAddress,
          status: "pending"
        })
        .select()
        .single();

      if (orderError) throw orderError;

      const orderItems = cartItems.map(item => ({
        order_id: order.id,
        product_id: item.product_id,
        quantity: item.quantity,
        price_at_time: 99.99
      }));

      const { error: itemsError } = await supabase
        .from("order_items")
        .insert(orderItems);

      if (itemsError) throw itemsError;

      const { error: clearCartError } = await supabase
        .from("user_cart")
        .delete()
        .eq("user_id", session.user.id);

      if (clearCartError) throw clearCartError;

      return order;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      setShowShippingForm(false);
      toast.success("Order placed successfully!");
    },
    onError: (error) => {
      console.error("Checkout error:", error);
      toast.error("Failed to place order. Please try again.");
    }
  });

  const handleQuantityChange = (id: string, currentQuantity: number, change: number) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity < 1) return;
    updateQuantityMutation.mutate({ id, quantity: newQuantity });
  };

  const handleCheckout = (shippingAddress: string) => {
    checkoutMutation.mutate(shippingAddress);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-white hover:text-primary transition-all duration-300 group relative">
          <ShoppingCart className="w-6 h-6 transition-transform group-hover:scale-110" />
          {cartItems && cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
              {cartItems.length}
            </span>
          )}
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-secondary/95 backdrop-blur-xl border border-white/10">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair text-gradient">Shopping Cart</DialogTitle>
        </DialogHeader>
        {!session ? (
          <div className="text-center py-8 glass-effect rounded-lg p-6">
            <p className="text-muted-foreground mb-4">Please sign in to view your cart</p>
            <Button 
              onClick={() => document.getElementById("account-trigger")?.click()}
              className="bg-primary hover:bg-primary/80 text-white"
            >
              Sign In
            </Button>
          </div>
        ) : showShippingForm ? (
          <ShippingAddressForm 
            onSubmit={handleCheckout}
            isLoading={checkoutMutation.isPending}
          />
        ) : (
          <div className="space-y-6">
            <CartItemsList 
              items={cartItems || []}
              onQuantityChange={handleQuantityChange}
              onDelete={(id) => deleteItemMutation.mutate(id)}
            />
            {cartItems && cartItems.length > 0 && (
              <div className="mt-6 space-y-4 glass-effect rounded-lg p-6">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-lg font-medium text-white">Total Items</span>
                  <span className="text-xl font-bold text-primary">
                    {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                  </span>
                </div>
                <Button 
                  className="w-full bg-primary hover:bg-primary/80 text-white font-semibold py-6"
                  onClick={() => setShowShippingForm(true)}
                >
                  Proceed to Checkout
                </Button>
              </div>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CartDialog;