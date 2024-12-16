import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

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
    <span className="inline-block animate-pulse">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const TopDeals = () => {
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
              <p className="text-white/60">SELECTED BRANDS</p>
            </div>
            <Button
              className="bg-white text-secondary hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              asChild
            >
              <a href="#deals">SHOP NOW</a>
            </Button>
          </div>

          <div className="bg-secondary/50 backdrop-blur-xl rounded-2xl p-12 space-y-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20">
            <h2 className="text-4xl font-mono text-white relative group">
              <TypewriterText text="Our Staff Pick" />
              <div className="absolute inset-0 blur-lg bg-primary/30 -z-10 group-hover:bg-primary/50 transition-colors duration-300"></div>
            </h2>
            <p className="text-xl text-white/80">Tune into quality sound</p>
            <Button
              className="bg-white text-secondary hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              asChild
            >
              <a href="#staff-pick">SHOP NOW</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDeals;