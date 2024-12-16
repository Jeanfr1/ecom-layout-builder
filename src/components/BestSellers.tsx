import { useState, useEffect } from "react";

const products = [
  {
    id: 1,
    name: "Smart Watch Pro",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9"
  },
  {
    id: 2,
    name: "Noise-Canceling Headphones",
    price: 249.99,
    originalPrice: 329.99,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    id: 3,
    name: "4K Drone Camera",
    price: 799.99,
    originalPrice: 999.99,
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc"
  },
  {
    id: 4,
    name: "Gaming Console Elite",
    price: 499.99,
    originalPrice: 599.99,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  }
];

const BestSellers = () => {
  const [prices, setPrices] = useState(products.map(p => p.originalPrice));

  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(currentPrices =>
        currentPrices.map((price, idx) => {
          const targetPrice = products[idx].price;
          if (price > targetPrice) {
            return Number((price - 0.01).toFixed(2));
          }
          return targetPrice;
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0F1115] py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-mono text-white animate-fade-in">Best Sellers</h2>
          <button className="bg-primary/20 text-primary px-6 py-2 rounded-full hover:bg-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
            VIEW ALL
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="bg-secondary/50 backdrop-blur-xl rounded-2xl p-6 space-y-4 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
            >
              <div className="aspect-square bg-white/5 rounded-xl p-4 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-white text-lg">{product.name}</h3>
              <div className="space-y-1">
                <p className="text-white/60 line-through text-sm">
                  ${product.originalPrice.toFixed(2)}
                </p>
                <p className="text-white font-mono text-xl animate-pulse">
                  ${prices[index].toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellers;