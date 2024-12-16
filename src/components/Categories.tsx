const categories = [
  {
    title: "Smart Home",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    link: "/smart-home"
  },
  {
    title: "Gaming & VR",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    link: "/gaming"
  },
  {
    title: "Wearables",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    link: "/wearables"
  }
];

const Categories = () => {
  return (
    <div className="bg-[#0F1115] py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-mono text-white">Shop By Category</h2>
          <button className="bg-primary/20 text-primary px-6 py-2 rounded-full hover:bg-primary/30 transition-colors">
            ALL PRODUCTS
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.link}
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <h3 className="absolute bottom-6 left-6 text-white text-xl font-mono">
                {category.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;