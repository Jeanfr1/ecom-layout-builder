import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Tables } from "@/integrations/supabase/types";

interface CartItemsListProps {
  items: Tables<"user_cart">[];
  onQuantityChange: (id: string, currentQuantity: number, change: number) => void;
  onDelete: (id: string) => void;
}

const CartItemsList = ({ items, onQuantityChange, onDelete }: CartItemsListProps) => {
  if (!items || items.length === 0) {
    return (
      <div className="text-center py-12 glass-effect rounded-lg">
        <p className="text-lg text-muted-foreground">Your cart is empty</p>
        <p className="text-sm text-muted-foreground mt-2">Start shopping to add items to your cart</p>
      </div>
    );
  }

  return (
    <ScrollArea className="h-[400px] w-full rounded-lg glass-effect p-4">
      <div className="space-y-4">
        {items.map((item) => (
          <div 
            key={item.id} 
            className="flex items-center justify-between space-x-4 border-b border-white/10 pb-4 hover:bg-white/5 p-4 rounded-lg transition-colors"
          >
            <div className="flex-1">
              <h4 className="font-medium text-white">Product {item.product_id}</h4>
              <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => onQuantityChange(item.id, item.quantity, -1)}
                className="h-8 w-8 rounded-full border-primary/50 hover:border-primary hover:bg-primary/20"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center font-medium">{item.quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => onQuantityChange(item.id, item.quantity, 1)}
                className="h-8 w-8 rounded-full border-primary/50 hover:border-primary hover:bg-primary/20"
              >
                <Plus className="h-4 w-4" />
              </Button>
              <Button
                variant="destructive"
                size="icon"
                onClick={() => onDelete(item.id)}
                className="h-8 w-8 rounded-full hover:bg-destructive/80"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default CartItemsList;