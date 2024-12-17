import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";

const NewIn = () => {
  const newProducts = [
    {
      id: 1,
      name: "Latest iPhone Pro",
      price: 999.99,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      description: "The most powerful iPhone ever with revolutionary camera system"
    },
    {
      id: 2,
      name: "New MacBook Air",
      price: 1299.99,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      description: "Incredibly thin and light, powered by Apple M2 chip"
    },
    {
      id: 3,
      name: "Wireless Earbuds Pro",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      description: "Premium sound quality with active noise cancellation"
    }
  ];

  const handleAddToCart = (productName: string) => {
    toast.success(`${productName} added to cart`);
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
          New Arrivals
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden bg-secondary/50 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                  <p className="text-primary font-bold text-xl mt-4">${product.price}</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full"
                    onClick={() => handleAddToCart(product.name)}
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

export default NewIn;