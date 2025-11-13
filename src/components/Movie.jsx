import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Movie = ({ movie }) => {
    return (
        <motion.div
            key={movie._id}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-md cursor-pointer"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(249,115,22,0.3)",
            }}
        >
            {/* Movie Poster */}
            <motion.div
                className="relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
            >
                <motion.img
                    src={movie.posterUrl}
                    alt={movie.title}
                    className="w-full h-64 object-cover rounded-t-xl"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                />
            </motion.div>

            {/* Movie Info */}
            <div className="p-4 text-center">
                <h3 className="text-lg text-white font-semibold truncate mb-2">
                    {movie.title}
                </h3>

                {/* Rating */}
                <div className="flex items-center justify-center gap-1 text-yellow-400 mb-2">
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <span className="text-sm font-bold">
                        {movie.rating?.toFixed(1)}
                    </span>
                </div>

                {/* Genre and Year */}
                <div className="flex justify-between items-center gap-5 mb-5">
                    <p className="text-gray-400 text-sm">
                        {movie.genre || "Unknown Genre"}
                    </p>
                    <p className="text-gray-500 text-sm">
                        {movie.releaseYear ? `Released: ${movie.releaseYear}` : ""}
                    </p>
                </div>


                {/* Details Button */}
                <motion.div whileHover={{ scale: 1.05 }}>
                    <Link
                        to={`/movies/${movie._id}`}
                        className="block mt-2 bg-[#f97316] hover:bg-[#bb4f02] text-white text-sm font-semibold py-2 rounded-full transition"
                    >
                        View Details
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Movie;
