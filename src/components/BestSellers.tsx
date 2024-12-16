const products = [
  {
    id: 1,
    name: "Smart Watch Pro",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9"
  },
  {
    id: 2,
    name: "Noise-Canceling Headphones",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    id: 3,
    name: "4K Drone Camera",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc"
  },
  {
    id: 4,
    name: "Gaming Console Elite",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  }
];

const BestSellers = () => {
  return (
    <div className="bg-[#0F1115] py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-mono text-white">Best Sellers</h2>
          <button className="bg-primary/20 text-primary px-6 py-2 rounded-full hover:bg-primary/30 transition-colors">
            VIEW ALL
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-secondary/50 backdrop-blur-xl rounded-2xl p-6 space-y-4">
              <div className="aspect-square bg-white/5 rounded-xl p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-white text-lg">{product.name}</h3>
              <p className="text-white font-mono">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellers;