import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";

const Computers = () => {
  const computers = [
    {
      id: 1,
      name: "MacBook Pro 16\"",
      price: 2499.99,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      description: "M3 Max chip, 32GB RAM, 1TB SSD"
    },
    {
      id: 2,
      name: "iPad Pro 12.9\"",
      price: 1099.99,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      description: "M2 chip, 256GB, Face ID, Apple Pencil support"
    },
    {
      id: 3,
      name: "Surface Laptop Studio",
      price: 1599.99,
      image: "https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      description: "Intel i7, 16GB RAM, transformable design"
    }
  ];

  const handleAddToCart = (computerName: string) => {
    toast.success(`${computerName} added to cart`);
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
          Computers & Tablets
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {computers.map((computer) => (
            <motion.div
              key={computer.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden bg-secondary/50 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <img 
                    src={computer.image} 
                    alt={computer.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl mb-2">{computer.name}</CardTitle>
                  <CardDescription>{computer.description}</CardDescription>
                  <p className="text-primary font-bold text-xl mt-4">${computer.price}</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full"
                    onClick={() => handleAddToCart(computer.name)}
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

export default Computers;