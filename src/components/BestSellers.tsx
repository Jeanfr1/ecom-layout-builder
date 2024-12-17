import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Player } from "@lottiefiles/react-lottie-player";
import { useNavigate } from "react-router-dom";

const TypewriterText = ({ text, inView }: { text: string; inView: boolean }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (inView && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
    if (!inView) {
      setDisplayText("");
      setCurrentIndex(0);
    }
  }, [currentIndex, text, inView]);

  return (
    <span className="inline-block">
      {displayText}
      {inView && currentIndex < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
};

const products = [
  {
    id: 1,
    name: "Apple Watch Ultra",
    price: 799.99,
    originalPrice: 899.99,
    image: "/lovable-uploads/92437fef-9311-4781-919c-eebd216e3649.png",
    category: "accessories"
  },
  {
    id: 2,
    name: "AirPods Pro",
    price: 249.99,
    originalPrice: 329.99,
    image: "/lovable-uploads/6370727b-3c2b-4861-8d7b-fdae15503fbb.png",
    category: "accessories"
  },
  {
    id: 3,
    name: "Pro Gaming Setup",
    price: 2499.99,
    originalPrice: 2999.99,
    image: "/lovable-uploads/ebc7c69d-5c39-40d6-82f5-82ebbbb1bc60.png",
    category: "computers"
  },
  {
    id: 4,
    name: "DualSense Controller",
    price: 69.99,
    originalPrice: 89.99,
    image: "/lovable-uploads/92437fef-9311-4781-919c-eebd216e3649.png",
    category: "accessories"
  }
];

const BestSellers = () => {
  const navigate = useNavigate();
  const [prices, setPrices] = useState(products.map(p => p.originalPrice));
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(currentPrices =>
        currentPrices.map((price, idx) => {
          const targetPrice = products[idx].price;
          if (price > targetPrice) {
            return Number((price - 0.01).toFixed(2));
          }
          return targetPrice;
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleViewAll = () => {
    navigate("/new");
  };

  const handleProductClick = (category: string) => {
    navigate(`/${category}`);
  };

  return (
    <div className="bg-[#0F1115] py-20 relative">
      <div className="absolute top-0 right-0 opacity-30 pointer-events-none">
        <Player
          autoplay
          loop
          src="https://assets2.lottiefiles.com/packages/lf20_uwR49r.json"
          style={{ height: "200px", width: "200px" }}
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-1">
        <div className="h-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4">
        <div ref={ref} className="flex justify-between items-center mb-12">
          <motion.h2 
            className="text-4xl font-mono text-white relative group"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <TypewriterText text="Best Sellers" inView={inView} />
            <div className="absolute inset-0 blur-lg bg-primary/30 -z-10 group-hover:bg-primary/50 transition-colors duration-300"></div>
          </motion.h2>
          <motion.button 
            className="bg-primary/20 text-primary px-6 py-2 rounded-full hover:bg-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={handleViewAll}
          >
            VIEW ALL
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, rotateY: 5 }}
              className="bg-secondary/50 backdrop-blur-xl rounded-2xl p-6 space-y-4 shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer"
              onClick={() => handleProductClick(product.category)}
            >
              <div className="aspect-square bg-white/5 rounded-xl p-4 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-white text-lg">{product.name}</h3>
              <div className="space-y-1">
                <p className="text-white/60 line-through text-sm">
                  ${product.originalPrice.toFixed(2)}
                </p>
                <p className="text-white font-mono text-xl animate-pulse">
                  ${prices[index].toFixed(2)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellers;