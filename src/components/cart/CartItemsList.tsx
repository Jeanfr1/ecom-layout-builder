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
    return <p className="text-center text-muted-foreground">Your cart is empty</p>;
  }

  return (
    <ScrollArea className="h-[400px] w-full rounded-md border p-4">
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between space-x-4 border-b pb-4">
            <div className="flex-1">
              <h4 className="font-medium">Product {item.product_id}</h4>
              <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => onQuantityChange(item.id, item.quantity, -1)}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center">{item.quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => onQuantityChange(item.id, item.quantity, 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
              <Button
                variant="destructive"
                size="icon"
                onClick={() => onDelete(item.id)}
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