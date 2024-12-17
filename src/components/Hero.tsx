import { Button } from "@/components/ui/button";
import { Player } from "@lottiefiles/react-lottie-player";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

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
            src="https://assets5.lottiefiles.com/packages/lf20_UJNc2t.json"
            style={{ height: "100px", width: "100px" }}
          />
        </div>
        <div className="absolute bottom-20 right-10 animate-float-delayed">
          <Player
            autoplay
            loop
            src="https://assets2.lottiefiles.com/packages/lf20_kkflmtur.json"
            style={{ height: "120px", width: "120px" }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Glass Card */}
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="md:w-1/2 space-y-6 backdrop-blur-xl bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl"
          >
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-7xl font-poppins font-bold leading-tight text-gradient title-shadow"
            >
              TECHVERSE
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl font-inter text-white/80 tracking-wide"
            >
              Discover Tomorrow's Technology Today - Your Gateway to Innovation
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="relative group"
            >
              <Button
                className="px-8 py-6 text-lg relative overflow-hidden bg-gradient-to-r from-primary via-purple-500 to-primary bg-[length:200%_100%] hover:bg-[100%_0] transition-all duration-500 hover:shadow-lg hover:shadow-primary/50 group-hover:animate-shimmer"
                asChild
              >
                <a href="#shop" className="relative z-10 group-hover:text-white transition-colors flex items-center space-x-2">
                  <span>EXPLORE NOW</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </a>
              </Button>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/50 to-purple-500/50 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 mt-10 md:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
              alt="Featured Product"
              className="w-full h-auto object-contain rounded-2xl shadow-2xl"
            />
          </motion.div>
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