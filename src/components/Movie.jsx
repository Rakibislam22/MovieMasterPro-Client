import { Star } from "lucide-react";
import React, { useContext } from "react";
import { Link, useLocation } from "react-router";
import { motion } from "framer-motion";
import { AuthContext } from "../provider/AuthContext";
import { toast } from "react-toastify";

const Movie = ({ movie, handleRemoveFromUI }) => {
    const { theme, user } = useContext(AuthContext);
    const location = useLocation();
    const isWatchlistPage = location.pathname === "/dashboard/movies/watchlist";

    // ADD TO WATCHLIST
    const handleAddWatchlist = async () => {
        if (!user?.email) return toast.error("Please login first!");

        const payload = {
            movieId: movie._id,
            email: user.email,
        };

        try {
            const res = await fetch("https://movie-master-pro1234.vercel.app/watchlist/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (!data.success) {
                toast.error(data.message || "Already in watchlist!");
            } else {
                toast.success("Added to Watchlist!");
            }
        } catch (err) {
            toast.error("Something went wrong");
        }
    };

    // REMOVE FROM WATCHLIST
    const handleRemoveWatchlist = async () => {
        if (!user?.email) return toast.error("Login required");

        try {
            const res = await fetch("https://movie-master-pro1234.vercel.app/watchlist/remove", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: user.email,
                    movieId: movie._id,
                }),
            });

            const data = await res.json();

            if (data.success) {
                toast.success("Removed from Watchlist!");
                handleRemoveFromUI(movie._id);
            } else {
                toast.error("Failed to remove");
            }
        } catch (err) {
            toast.error("Something went wrong!");
        }
    };

    return (
        <motion.div
            key={movie._id}
            className={`${theme === "dark" ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"} rounded-xl overflow-hidden shadow-md`}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(249,115,22,0.3)" }}
        >
            <motion.div className="relative overflow-hidden">
                <motion.img
                    src={movie.posterUrl}
                    alt={movie.title}
                    className="w-full h-64 object-cover rounded-t-xl"
                />
            </motion.div>

            <div className="p-4 text-center">
                <h3 className="text-2xl font-semibold truncate mb-2">{movie.title}</h3>

                <div className="flex items-center justify-center gap-1 text-yellow-400 mb-2">
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <span className="text-sm font-bold">
                        {parseFloat(movie.rating)?.toFixed(1)}
                    </span>
                </div>

                <div className="flex justify-between items-center gap-5 mb-5">
                    <p className="text-gray-400 text-sm">{movie.genre}</p>
                    <p className="text-gray-500 text-sm">Released: {movie.releaseYear}</p>
                </div>

                <motion.div whileHover={{ scale: 1.05 }}>
                    <Link
                        to={`/movies/${movie._id}`}
                        className="block mt-2 bg-[#f97316] hover:bg-[#bb4f02] text-white text-sm font-semibold py-2 rounded-full"
                    >
                        View Details
                    </Link>
                </motion.div>

                {/* Add / Remove Watchlist Button */}
                <motion.div whileHover={{ scale: 1.05 }}>
                    <button
                        onClick={isWatchlistPage ? handleRemoveWatchlist : handleAddWatchlist}
                        className={`block mt-2 text-white text-sm font-semibold py-2 rounded-full w-full ${isWatchlistPage ? "bg-red-600 hover:bg-red-800" : "bg-gray-600 hover:bg-gray-800"
                            }`}
                    >
                        {isWatchlistPage ? "Remove from Watchlist" : "Add to Watchlist"}
                    </button>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Movie;
