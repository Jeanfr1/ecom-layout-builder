import { ShoppingCart, Heart, User, Laptop, Smartphone, Headphones, Gift, Mail, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-xl bg-secondary/50 border-b border-white/10 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-mono text-white font-bold hover:text-primary transition-colors"
          >
            TECHVERSE
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {[
              { to: "/new", label: "New In", icon: Gift },
              { to: "/phones", label: "Cell Phones", icon: Smartphone },
              { to: "/computers", label: "Computers & Tablets", icon: Laptop },
              { to: "/accessories", label: "Accessories", icon: Headphones },
              { to: "/contact", label: "Contact", icon: Mail },
            ].map((item) => (
              <Link 
                key={item.to}
                to={item.to} 
                className="text-white hover:text-primary transition-all duration-300 flex items-center space-x-2 group"
              >
                <item.icon 
                  className="w-4 h-4 transition-all duration-300 group-hover:scale-110" 
                />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-6">
            {[
              { icon: User, label: "Account" },
              { icon: Heart, label: "Wishlist" },
              { icon: ShoppingCart, label: "Cart", badge: "0" }
            ].map((item, index) => (
              <button 
                key={index}
                className="text-white hover:text-primary transition-all duration-300 group relative"
                aria-label={item.label}
              >
                <item.icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                {item.badge && (
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
            <button className="md:hidden text-white hover:text-primary transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;