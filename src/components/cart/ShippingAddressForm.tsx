import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ShippingAddressFormProps {
  onSubmit: (address: string) => void;
  isLoading: boolean;
}

const ShippingAddressForm = ({ onSubmit, isLoading }: ShippingAddressFormProps) => {
  const [address, setAddress] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(address);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="shipping-address">Shipping Address</Label>
        <Input
          id="shipping-address"
          placeholder="Enter your full shipping address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <Button 
        type="submit" 
        className="w-full"
        disabled={isLoading || !address.trim()}
      >
        {isLoading ? "Processing..." : "Place Order"}
      </Button>
    </form>
  );
};

export default ShippingAddressForm;