import { ShoppingCart, Heart, User } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-secondary/80 backdrop-blur-lg z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-mono text-white font-bold">
            TECHVERSE
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/new" className="text-white hover:text-primary transition-colors">
              New In
            </Link>
            <Link to="/phones" className="text-white hover:text-primary transition-colors">
              Cell Phones
            </Link>
            <Link to="/computers" className="text-white hover:text-primary transition-colors">
              Computers & Tablets
            </Link>
            <Link to="/accessories" className="text-white hover:text-primary transition-colors">
              Accessories
            </Link>
            <Link to="/sale" className="text-white hover:text-primary transition-colors">
              Sale
            </Link>
            <Link to="/contact" className="text-white hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-primary transition-colors">
              <User size={24} />
            </button>
            <button className="text-white hover:text-primary transition-colors">
              <Heart size={24} />
            </button>
            <button className="text-white hover:text-primary transition-colors relative">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;