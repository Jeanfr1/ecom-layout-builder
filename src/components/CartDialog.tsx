import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Minus, Plus, Trash2 } from "lucide-react";
import { useSession } from "@supabase/auth-helpers-react";
import { supabase } from "@/integrations/supabase/client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const CartDialog = () => {
  const session = useSession();
  const queryClient = useQueryClient();

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

  const handleQuantityChange = (id: string, currentQuantity: number, change: number) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity < 1) return;
    updateQuantityMutation.mutate({ id, quantity: newQuantity });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-white hover:text-primary transition-all duration-300 group relative">
          <ShoppingCart className="w-6 h-6 transition-transform group-hover:scale-110" />
          {cartItems && cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
              {cartItems.length}
            </span>
          )}
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Shopping Cart</DialogTitle>
        </DialogHeader>
        {!session ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground mb-4">Please sign in to view your cart</p>
            <Button onClick={() => document.getElementById("account-trigger")?.click()}>
              Sign In
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="h-[400px] w-full rounded-md border p-4">
              {!cartItems || cartItems.length === 0 ? (
                <p className="text-center text-muted-foreground">Your cart is empty</p>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between space-x-4 border-b pb-4">
                      <div className="flex-1">
                        <h4 className="font-medium">Product {item.product_id}</h4>
                        <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleQuantityChange(item.id, item.quantity, -1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleQuantityChange(item.id, item.quantity, 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="destructive"
                          size="icon"
                          onClick={() => deleteItemMutation.mutate(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ScrollArea>
            {cartItems && cartItems.length > 0 && (
              <div className="mt-4 space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium">Total Items:</span>
                  <span>{cartItems.reduce((acc, item) => acc + item.quantity, 0)}</span>
                </div>
                <Button className="w-full" onClick={() => toast.info("Checkout feature coming soon!")}>
                  Proceed to Checkout
                </Button>
              </div>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CartDialog;