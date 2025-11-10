import React from "react";
import { Film, Heart, Laugh, Zap, Sword, Ghost, Atom, Music } from "lucide-react";
import { motion } from "framer-motion";

const genres = [
  { name: "Action", icon: <Zap className="w-6 h-6 text-red-500" /> },
  { name: "Drama", icon: <Heart className="w-6 h-6 text-pink-500" /> },
  { name: "Comedy", icon: <Laugh className="w-6 h-6 text-yellow-400" /> },
  { name: "Sci-Fi", icon: <Atom className="w-6 h-6 text-blue-400" /> },
  { name: "Thriller", icon: <Sword className="w-6 h-6 text-purple-500" /> },
  { name: "Horror", icon: <Ghost className="w-6 h-6 text-gray-400" /> },
  { name: "Romance", icon: <Heart className="w-6 h-6 text-rose-400" /> },
  { name: "Music", icon: <Music className="w-6 h-6 text-green-400" /> },
  { name: "Animation", icon: <Film className="w-6 h-6 text-orange-400" /> },
];

const GenreSection = ({ jump }) => {
  return (
    <motion.section
      id={jump}
      className="py-16 px-6 md:px-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="border-l-6 border-[#f97316] pl-3 text-4xl md:text-5xl font-bold mb-2">
          Browse by Genre
        </h2>
        <p className="text-gray-400">Find movies from your favorite categories</p>
      </motion.div>

      <motion.div
        className="text-white mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true }}
      >
        {genres.map((genre, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 rounded-xl p-6 flex flex-col items-center justify-center shadow-md hover:scale-[1.05] hover:bg-gray-800 transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-3">{genre.icon}</div>
            <h3 className="text-lg font-semibold">{genre.name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default GenreSection;
