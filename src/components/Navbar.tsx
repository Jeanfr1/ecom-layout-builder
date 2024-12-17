import { Heart, Laptop, Smartphone, Headphones, Gift, Mail, Menu, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import AccountDialog from "./AccountDialog";
import CartDialog from "./CartDialog";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      toast.success("Logged out successfully");
      navigate("/auth");
    } catch (error) {
      toast.error("Error logging out");
    }
  };

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
            <AccountDialog />
            <button 
              className="text-white hover:text-primary transition-all duration-300 group"
              onClick={() => toast.info("Wishlist feature coming soon!")}
            >
              <Heart className="w-6 h-6 transition-transform group-hover:scale-110" />
            </button>
            <CartDialog />
            <button 
              onClick={handleLogout}
              className="text-white hover:text-primary transition-all duration-300 group"
              aria-label="Logout"
            >
              <LogOut className="w-6 h-6 transition-transform group-hover:scale-110" />
            </button>
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