import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-secondary to-[#0F1115] pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-7xl font-mono text-white font-bold leading-tight">
              TECHVERSE
            </h1>
            <p className="text-xl text-white/80">
              Discover Tomorrow's Technology Today - Your Gateway to Innovation
            </p>
            <Button
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
              asChild
            >
              <a href="#shop">EXPLORE NOW</a>
            </Button>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
              alt="Featured Product"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#0F1115] to-transparent h-32" />
    </div>
  );
};

export default Hero;