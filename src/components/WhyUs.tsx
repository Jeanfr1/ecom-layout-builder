import { Truck, Clock, Shield } from "lucide-react";

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
        <h2 className="text-4xl font-mono text-white mb-12">Why Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 bg-secondary/50 backdrop-blur-xl rounded-2xl p-8"
            >
              <feature.icon className="w-12 h-12 text-primary" />
              <p className="text-white text-lg font-mono">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;