import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";

const Accessories = () => {
  const accessories = [
    {
      id: 1,
      name: "AirPods Pro",
      price: 249.99,
      image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      description: "Active noise cancellation, Adaptive Audio"
    },
    {
      id: 2,
      name: "Magic Keyboard",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      description: "For iPad Pro 12.9-inch, backlit keys"
    },
    {
      id: 3,
      name: "Apple Watch Ultra",
      price: 799.99,
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      description: "Titanium case, cellular, advanced GPS"
    }
  ];

  const handleAddToCart = (accessoryName: string) => {
    toast.success(`${accessoryName} added to cart`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-gradient"
        >
          Accessories
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accessories.map((accessory) => (
            <motion.div
              key={accessory.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden bg-secondary/50 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <img 
                    src={accessory.image} 
                    alt={accessory.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl mb-2">{accessory.name}</CardTitle>
                  <CardDescription>{accessory.description}</CardDescription>
                  <p className="text-primary font-bold text-xl mt-4">${accessory.price}</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full"
                    onClick={() => handleAddToCart(accessory.name)}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accessories;