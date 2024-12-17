import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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

const TopDeals = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0F1115] py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-secondary/50 backdrop-blur-xl rounded-2xl p-12 space-y-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20">
            <h2 className="text-4xl font-mono text-white relative group">
              <TypewriterText text="Top Deals" />
              <div className="absolute inset-0 blur-lg bg-primary/30 -z-10 group-hover:bg-primary/50 transition-colors duration-300"></div>
            </h2>
            <div className="space-y-2">
              <p className="text-white/60">UP TO</p>
              <p className="text-6xl font-bold text-white animate-pulse">30% OFF</p>
              <p className="text-white/60">ON LATEST PHONES</p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <Button
                className="w-full py-6 text-lg font-semibold relative overflow-hidden bg-gradient-to-r from-primary via-purple-500 to-primary bg-[length:200%_100%] hover:bg-[100%_0] transition-all duration-500 hover:shadow-lg hover:shadow-primary/50 group-hover:animate-shimmer"
                onClick={() => navigate("/phones")}
              >
                <span className="relative z-10 text-white group-hover:text-white transition-colors">
                  SHOP NOW
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-[-100%] group-hover:translate-x-[100%]" />
              </Button>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/50 to-purple-500/50 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.div>
          </div>

          <div className="bg-secondary/50 backdrop-blur-xl rounded-2xl p-12 space-y-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20">
            <h2 className="text-4xl font-mono text-white relative group">
              <TypewriterText text="Our Staff Pick" />
              <div className="absolute inset-0 blur-lg bg-primary/30 -z-10 group-hover:bg-primary/50 transition-colors duration-300"></div>
            </h2>
            <p className="text-xl text-white/80">Premium Gaming Accessories</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <Button
                className="w-full py-6 text-lg font-semibold relative overflow-hidden bg-gradient-to-r from-primary via-purple-500 to-primary bg-[length:200%_100%] hover:bg-[100%_0] transition-all duration-500 hover:shadow-lg hover:shadow-primary/50 group-hover:animate-shimmer"
                onClick={() => navigate("/accessories")}
              >
                <span className="relative z-10 text-white group-hover:text-white transition-colors">
                  SHOP NOW
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-[-100%] group-hover:translate-x-[100%]" />
              </Button>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/50 to-purple-500/50 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDeals;