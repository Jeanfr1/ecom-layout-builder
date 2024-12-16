import { Truck, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Truck,
    title: "Free shipping on orders over $50",
  },
  {
    icon: Clock,
    title: "Available to you 24/7",
  },
  {
    icon: Shield,
    title: "Extended Warranty Plans",
  },
];

const WhyUs = () => {
  return (
    <div className="bg-[#0F1115] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-mono text-white mb-12 relative group">
          <span className="relative z-10">Why Us</span>
          <div className="absolute inset-0 blur-lg bg-primary/30 -z-0 group-hover:bg-primary/50 transition-colors duration-300"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-4 bg-secondary/50 backdrop-blur-xl rounded-2xl p-8 group hover:bg-secondary/70 transition-all duration-500"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <motion.div
                className="relative"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8, type: "spring" }}
              >
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
                <feature.icon className="w-12 h-12 text-primary relative z-10 transform group-hover:scale-110 transition-transform duration-300" />
              </motion.div>
              <p className="text-lg font-mono text-white text-center group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;