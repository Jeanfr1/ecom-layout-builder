import { Button } from "@/components/ui/button";

const TopDeals = () => {
  return (
    <div className="bg-[#0F1115] py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-secondary/50 backdrop-blur-xl rounded-2xl p-12 space-y-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20">
            <h2 className="text-4xl font-mono text-white animate-fade-in">Top Deals</h2>
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
            <h2 className="text-4xl font-mono text-white animate-fade-in">Our Staff Pick</h2>
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