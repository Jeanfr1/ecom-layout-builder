import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Newsletter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="flex justify-center items-center w-full">
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 animate-gradient-x"></div>
        <div className="bg-secondary/50 backdrop-blur-xl rounded-2xl p-12 max-w-md relative">
          {/* Animated circles in background */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700"></div>
          
          <div className="space-y-6 relative z-10 text-center">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-white font-mono relative group"
            >
              <span className="relative z-10">Stay in the Loop</span>
              <div className="absolute inset-0 blur-lg bg-primary/30 -z-10 group-hover:bg-primary/50 transition-colors duration-300"></div>
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
              className="text-white/80"
            >
              Get exclusive access to new products and special offers
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center space-x-2"
            >
              <Checkbox id="subscribe" className="border-white/20 data-[state=checked]:bg-primary" />
              <label htmlFor="subscribe" className="text-sm text-white/80 hover:text-white transition-colors">
                Yes, I want to receive updates!
              </label>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6 }}
            >
              <Button 
                className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
              >
                JOIN NOW
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Newsletter;