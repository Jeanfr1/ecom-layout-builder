import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const categories = [
  {
    title: "Smart Home",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80",
    link: "/accessories",
    description: "Transform your living space"
  },
  {
    title: "Phones",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd",
    link: "/phones",
    description: "Latest smartphones"
  },
  {
    title: "Laptops",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    link: "/computers",
    description: "Powerful computing"
  },
  {
    title: "Accessories",
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb",
    link: "/accessories",
    description: "Essential add-ons"
  }
];

const Categories = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0F1115] py-20" id="shop">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-mono text-white relative group inline-block">
            <TypewriterText text="Shop by Category" />
            <div className="absolute -inset-4 blur-3xl bg-primary/60 -z-10 group-hover:bg-primary/80 transition-colors duration-300"></div>
            <div className="absolute -inset-8 -z-20 blur-[100px] bg-[#9b87f5]/50 animate-pulse"></div>
            <div className="absolute -inset-12 -z-30 blur-[120px] bg-[#7E69AB]/40 animate-pulse delay-75"></div>
          </h2>
          <p className="text-gray-400 mt-4">Discover our wide range of tech products</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="relative h-[300px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 z-10" />
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20 p-6">
                  <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-gray-200 text-center mb-4">{category.description}</p>
                  <Button
                    onClick={() => navigate(category.link)}
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50 transition-all duration-300"
                  >
                    Explore Now
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={() => navigate("/new")}
            className="px-8 py-6 text-lg relative overflow-hidden bg-gradient-to-r from-primary via-purple-500 to-primary bg-[length:200%_100%] hover:bg-[100%_0] transition-all duration-500 hover:shadow-lg hover:shadow-primary/50"
          >
            View All Products
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Categories;