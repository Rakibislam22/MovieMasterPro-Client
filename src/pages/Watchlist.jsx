import React, { use, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Movie from "../components/Movie";
import { AuthContext } from "../provider/AuthContext";


const Watchlist = () => {
    const { user, theme } = use(AuthContext);
    const [watchlist, setWatchlist] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch watchlist movies
    useEffect(() => {
        const fetchWatchlist = async () => {
            try {
                const res = await fetch(
                    `http://localhost:3000/watchlist?email=${user.email}`
                );
                const data = await res.json();
                setWatchlist(data);
            } catch (err) {
                console.error("Failed to load watchlist:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchWatchlist();
    }, [user.email]);

    return (
        <div
            className={`min-h-screen px-4 xl:px-12 mx-auto pt-10 pb-20 ${
                theme === "dark"
                    ? "bg-gray-950 text-gray-200"
                    : "bg-gray-100 text-gray-800"
            }`}
        >
            {/* Hero Section */}
            <motion.div
                className="text-center mb-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <h1 className="text-5xl font-bold mb-2">
                    My <span className="text-[#f97316]">Watchlist</span>
                </h1>

                <p className="text-gray-400 text-lg">
                    Track your favorite movies and continue watching anytime.
                </p>
            </motion.div>

            {/* Loading State */}
            {loading && (
                <p className="text-center text-xl text-gray-400">Loading...</p>
            )}

            {/* Empty Watchlist */}
            {!loading && watchlist.length === 0 && (
                <motion.div
                    className="text-center mt-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <h2 className="text-3xl font-semibold mb-4">
                        Your watchlist is empty
                    </h2>

                    <p className="text-gray-400 mb-6">
                        Start adding movies you love!
                    </p>

                    <motion.img
                        src="https://cdn-icons-png.flaticon.com/512/4076/4076500.png"
                        alt="Empty watchlist"
                        className="w-48 mx-auto opacity-40"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                </motion.div>
            )}

            {/* Watchlist Movie Grid */}
            {watchlist.length > 0 && (
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: { staggerChildren: 0.1 },
                        },
                    }}
                >
                    {watchlist.map((movie) => (
                        <motion.div
                            key={movie._id}
                            variants={{
                                hidden: { opacity: 0, scale: 0.9 },
                                show: { opacity: 1, scale: 1 },
                            }}
                        >
                            <Movie movie={movie} />
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </div>
    );
};

export default Watchlist;
