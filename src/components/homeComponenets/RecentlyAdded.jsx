import React, { useEffect, useState } from "react";
import { getRecentlyAddedMovies } from "./movieApI";
import Movie from "../Movie";
import { motion } from "framer-motion";

const RecentlyAdded = ({ jump }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await getRecentlyAddedMovies();
                setMovies(data);
            } catch (error) {
                console.error("Error fetching recently added movies:", error);
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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <h2 className="border-l-5 border-[#f97316]  text-4xl md:text-5xl font-bold pl-3  mb-2">
                    Recently Added
                </h2>
                <p className="text-gray-400">Check out the latest movies in the system</p>
            </motion.div>

            {loading ? (
                <div className="text-center text-gray-400">Loading...</div>
            ) : (
                <motion.div
                    className="text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    transition={{ staggerChildren: 0.1 }}
                    viewport={{ once: true }}
                >
                    {movies.map((movie) => (
                        <motion.div
                            key={movie._id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <Movie movie={movie}></Movie>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </motion.section>
    );
};

export default RecentlyAdded;
