import React, { useEffect, useState } from "react";
import { getTopRatedMovies } from "./movieApi";
import Movie from "../Movie";
import { motion } from "framer-motion";

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const TopRatedMovies = ({jump}) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getTopRatedMovies();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching top rated movies:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <motion.section
      id={jump}
      className="py-16 px-6 md:px-12"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Title Animation */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="border-l-4 border-[#f97316] pl-3 text-4xl md:text-5xl font-bold mb-2">
          Top Rated Movies
        </h2>
        <p className="text-gray-400">The top 5 movies loved by our users</p>
      </motion.div>

      {/* Movie Cards */}
      {loading ? (
        <div className="text-center text-gray-400">Loading...</div>
      ) : (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {movies.map((movie, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Movie movie={movie} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.section>
  );
};

export default TopRatedMovies;
