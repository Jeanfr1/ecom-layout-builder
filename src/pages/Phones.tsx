import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";

const Phones = () => {
  const phones = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: 999.99,
      image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      description: "A17 Pro chip, 48MP camera system, Titanium design"
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      price: 1199.99,
      image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      description: "200MP camera, S Pen included, AI-powered features"
    },
    {
      id: 3,
      name: "Google Pixel 8 Pro",
      price: 899.99,
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      description: "Advanced AI photography, Pure Android experience"
    }
  ];

  const handleAddToCart = (phoneName: string) => {
    toast.success(`${phoneName} added to cart`);
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
          Cell Phones
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {phones.map((phone) => (
            <motion.div
              key={phone.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden bg-secondary/50 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <img 
                    src={phone.image} 
                    alt={phone.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl mb-2">{phone.name}</CardTitle>
                  <CardDescription>{phone.description}</CardDescription>
                  <p className="text-primary font-bold text-xl mt-4">${phone.price}</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full"
                    onClick={() => handleAddToCart(phone.name)}
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

export default Phones;