import { Facebook, Instagram, Youtube, ExternalLink, Copyright } from "lucide-react";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="w-full bg-secondary/50 backdrop-blur-lg border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-playfair font-bold text-gradient">About Us</h3>
            <p className="text-sm text-gray-400">
              We offer the best e-commerce solutions to help your business grow in the digital world.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-playfair font-bold text-gradient">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Products", "Services", "Blog"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-2">
                    <ExternalLink size={14} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-playfair font-bold text-gradient">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: contact@company.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>New York, NY</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-playfair font-bold text-gradient">Newsletter</h3>
            <p className="text-sm text-gray-400">
              Subscribe to receive our latest updates
            </p>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
          </div>
        </div>
        
        <Separator className="my-8 bg-white/10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Copyright size={14} />
            <span>2024 Your Company. All rights reserved.</span>
          </div>
          
          <div className="flex gap-4">
            {[
              { icon: Facebook, href: "#", label: "Facebook" },
              { icon: Instagram, href: "#", label: "Instagram" },
              { icon: Youtube, href: "#", label: "Youtube" }
            ].map(({ icon: Icon, href, label }, index) => (
              <a
                key={index}
                href={href}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon size={18} className="text-gray-400 hover:text-primary transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;