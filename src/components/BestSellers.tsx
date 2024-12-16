const products = [
  {
    id: 1,
    name: "Instant camera",
    price: 100.00,
    image: "/lovable-uploads/6370727b-3c2b-4861-8d7b-fdae15503fbb.png"
  },
  {
    id: 2,
    name: "Wireless mouse",
    price: 50.00,
    image: "/lovable-uploads/6370727b-3c2b-4861-8d7b-fdae15503fbb.png"
  },
  {
    id: 3,
    name: "Fitness tracker",
    price: 75.00,
    image: "/lovable-uploads/6370727b-3c2b-4861-8d7b-fdae15503fbb.png"
  },
  {
    id: 4,
    name: "Wireless earbuds",
    price: 100.00,
    image: "/lovable-uploads/6370727b-3c2b-4861-8d7b-fdae15503fbb.png"
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