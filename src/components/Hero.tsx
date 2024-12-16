import { Button } from "@/components/ui/button";
import { Player } from "@lottiefiles/react-lottie-player";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-secondary to-[#0F1115] pt-20">
      {/* Floating Tech Symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-float">
          <Player
            autoplay
            loop
            src="https://lottie.host/58ead7c6-bcc3-47b7-b64f-6b07fdc11b42/zSdNXO9jF1.json"
            style={{ height: "100px", width: "100px" }}
          />
        </div>
        <div className="absolute bottom-20 right-10 animate-float-delayed">
          <Player
            autoplay
            loop
            src="https://lottie.host/2e20a225-3ae3-41bb-9231-33d8b83b9f0f/RqZWwxWNVJ.json"
            style={{ height: "120px", width: "120px" }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Glass Card */}
          <div 
            ref={ref}
            className={`md:w-1/2 space-y-6 backdrop-blur-xl bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-7xl font-mono text-white font-bold leading-tight">
              TECHVERSE
            </h1>
            <p className="text-xl text-white/80">
              Discover Tomorrow's Technology Today - Your Gateway to Innovation
            </p>
            <Button
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 group"
              asChild
            >
              <a href="#shop" className="group-hover:translate-x-1 transition-transform">
                EXPLORE NOW
              </a>
            </Button>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
              alt="Featured Product"
              className="w-full h-auto object-contain transition-all duration-500 hover:scale-105 animate-fade-in rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Diagonal Gradient Divider */}
      <div 
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-tr from-[#0F1115] via-primary/20 to-[#0F1115] transform -skew-y-3"
      />
    </div>
  );
};

export default Hero;