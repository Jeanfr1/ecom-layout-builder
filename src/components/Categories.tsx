import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Player } from "@lottiefiles/react-lottie-player";

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
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="bg-[#0F1115] py-20 relative">
      {/* Decorative Lottie Animation */}
      <div className="absolute bottom-0 left-0 opacity-30 pointer-events-none">
        <Player
          autoplay
          loop
          src="https://assets9.lottiefiles.com/packages/lf20_xvrofzfk.json"
          style={{ height: "200px", width: "200px" }}
        />
      </div>

      {/* Geometric Separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-[50px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M1200 120L0 16.48V0h1200v120z"
            className="fill-primary/10"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-mono text-white">Shop By Category</h2>
          <button className="bg-primary/20 text-primary px-6 py-2 rounded-full hover:bg-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
            ALL PRODUCTS
          </button>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.a
              key={index}
              href={category.link}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, rotateY: 5 }}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
              <h3 className="absolute bottom-6 left-6 text-white text-xl font-mono transition-transform duration-300 group-hover:translate-x-2">
                {category.title}
              </h3>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;