import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Player } from "@lottiefiles/react-lottie-player";

const categories = [
  {
    title: "Smart Home",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    link: "/smart-home",
    description: "Transform your living space"
  },
  {
    title: "Gaming & VR",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    link: "/gaming",
    description: "Next-level entertainment"
  },
  {
    title: "Wearables",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    link: "/wearables",
    description: "Stay connected in style"
  }
];

const Categories = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const TypewriterText = ({ text }: { text: string }) => {
    const letters = text.split("");
    return (
      <div className="inline-block">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-[#0F1115] py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl animate-float-delayed" />
      </div>

      {/* Decorative Lottie Animation */}
      <div className="absolute bottom-0 left-0 opacity-30 pointer-events-none">
        <Player
          autoplay
          loop
          src="https://assets9.lottiefiles.com/packages/lf20_xvrofzfk.json"
          style={{ height: "200px", width: "200px" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-12"
        >
          <h2 className="text-4xl font-mono text-white relative group">
            <TypewriterText text="Shop By Category" />
            <div className="absolute inset-0 blur-lg bg-primary/30 -z-10 group-hover:bg-primary/50 transition-colors duration-300"></div>
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-effect text-primary px-6 py-2 rounded-full hover:bg-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            ALL PRODUCTS
          </motion.button>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.a
              key={index}
              href={category.link}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.03, rotateY: 5 }}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                  className="text-white text-2xl font-mono mb-2 transition-transform duration-300 group-hover:translate-x-2"
                >
                  {category.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.4 }}
                  className="text-white/70 group-hover:text-white transition-colors duration-300"
                >
                  {category.description}
                </motion.p>
              </div>
              {/* Glowing Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;