import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-secondary to-[#0F1115] pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-7xl font-mono text-white font-bold leading-tight">
              SELCORE
            </h1>
            <p className="text-xl text-white/80">
              Your Ultimate Destination for the Best Value Electronics and Gadgets
            </p>
            <Button
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
              asChild
            >
              <a href="#shop">SHOP NOW</a>
            </Button>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
              src="/lovable-uploads/92437fef-9311-4781-919c-eebd216e3649.png"
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