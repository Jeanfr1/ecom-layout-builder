import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Player } from "@lottiefiles/react-lottie-player";

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

const products = [
  {
    id: 1,
    name: "Smart Watch Pro",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9"
  },
  {
    id: 2,
    name: "Noise-Canceling Headphones",
    price: 249.99,
    originalPrice: 329.99,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    id: 3,
    name: "4K Drone Camera",
    price: 799.99,
    originalPrice: 999.99,
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc"
  },
  {
    id: 4,
    name: "Gaming Console Elite",
    price: 499.99,
    originalPrice: 599.99,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  }
];

const BestSellers = () => {
  const [prices, setPrices] = useState(products.map(p => p.originalPrice));
  const { ref, inView } = useInView({
    triggerOnce: true,
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

  return (
    <div className="bg-[#0F1115] py-20 relative">
      <div className="absolute top-0 right-0 opacity-30 pointer-events-none">
        <Player
          autoplay
          loop
          src="https://assets9.lottiefiles.com/packages/lf20_rqc9mnar.json"
          style={{ height: "200px", width: "200px" }}
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-1">
        <div className="h-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-mono text-white relative group">
            <TypewriterText text="Best Sellers" />
            <div className="absolute inset-0 blur-lg bg-primary/30 -z-10 group-hover:bg-primary/50 transition-colors duration-300"></div>
          </h2>
          <button className="bg-primary/20 text-primary px-6 py-2 rounded-full hover:bg-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
            VIEW ALL
          </button>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, rotateY: 5 }}
              className="bg-secondary/50 backdrop-blur-xl rounded-2xl p-6 space-y-4 shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
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