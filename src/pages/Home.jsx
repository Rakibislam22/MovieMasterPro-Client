import React, { useEffect, useState, useRef } from "react";
import HeroSection from "../components/homeComponenets/HeroSection";
import TopRatedMovies from "../components/homeComponenets/TopRatedMovies";
import RecentlyAdded from "../components/homeComponenets/RecentlyAdded";
import GenreSection from "../components/homeComponenets/GenreSection";
import AboutSection from "../components/homeComponenets/AboutSection";
import { getStats } from "../components/homeComponenets/movieApI";
import { motion, useMotionValue, useTransform, useInView, animate } from "framer-motion";

const Home = () => {
    const [stats, setStats] = useState({ movies: 0, users: 0, loading: true });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const data = await getStats();
                setStats({ ...data, loading: false });
            } catch (error) {
                console.error("Error fetching stats:", error);
                setStats({ movies: 0, users: 0, loading: false });
            }
        };
        fetchStats();
    }, []);

    // Animated Counter Hooks
    const moviesRef = useRef(null);
    const usersRef = useRef(null);
    const moviesInView = useInView(moviesRef, { once: true, amount: 0.3 });
    const usersInView = useInView(usersRef, { once: true, amount: 0.3 });

    const moviesValue = useMotionValue(0);
    const usersValue = useMotionValue(0);

    // Local state for rendering integer values (safe & simple)
    const [moviesDisplay, setMoviesDisplay] = useState(0);
    const [usersDisplay, setUsersDisplay] = useState(0);

    useEffect(() => {
        // subscribe MotionValues to update local display states
        const unsubscribeMovies = moviesValue.onChange((v) => {
            setMoviesDisplay(Math.floor(v));
        });
        const unsubscribeUsers = usersValue.onChange((v) => {
            setUsersDisplay(Math.floor(v));
        });
        return () => {
            unsubscribeMovies();
            unsubscribeUsers();
        };
    }, [moviesValue, usersValue]);

    useEffect(() => {
        if (moviesInView && !stats.loading) {
            // animate() is the helper from framer-motion
            animate(moviesValue, stats.movies, { duration: 2, ease: "easeOut" });
        }
    }, [moviesInView, stats.loading, stats.movies, moviesValue]);

    useEffect(() => {
        if (usersInView && !stats.loading) {
            animate(usersValue, stats.users, { duration: 2, ease: "easeOut" });
        }
    }, [usersInView, stats.loading, stats.users, usersValue]);

    return (
        <div>
            <div className="bg-black min-h-screen text-white">
                <HeroSection></HeroSection>
            </div>

            {/* Stats Section */}
            <motion.section
                className="pt-30 pb-20 text-white text-center bg-gradient-to-b from-black via-black/30 to-transparent"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeIn" }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Movies Counter */}
                    <motion.div
                        ref={moviesRef}
                        className="bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-lg transition relative overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0, scale: [1, 1.1, 1] }}
                        transition={{ duration: 0.8, ease: "easeIn", delay: 0.1 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <h2 className="text-5xl font-extrabold text-[#f97316] mb-3">
                            {stats.loading ? "..." : moviesDisplay}
                        </h2>
                        <p className="text-lg opacity-90 font-medium">Total Movies</p>

                        {/* Small sparkle burst effect */}
                        {moviesInView && !stats.loading && (
                            <motion.div
                                className="absolute text-[#f97316] text-5xl font-bold left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: [0, 1.5, 0.8, 0], opacity: [0, 1, 0] }}
                                transition={{ duration: 0.8, delay: 1.9 }}
                            >
                                ✨
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Users Counter */}
                    <motion.div
                        ref={usersRef}
                        className="bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-lg transition relative overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0, scale: [1, 1.1, 1] }}
                        transition={{ duration: 0.8, ease: "easeIn", delay: 0.2 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <h2 className="text-5xl font-extrabold text-blue-400 mb-3">
                            {stats.loading ? "..." : usersDisplay}
                        </h2>
                        <p className="text-lg opacity-90 font-medium">Total Users</p>

                        {usersInView && !stats.loading && (
                            <motion.div
                                className="absolute text-blue-400 text-5xl font-bold left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: [0, 1.5, 0.8, 0], opacity: [0, 1, 0] }}
                                transition={{ duration: 0.8, delay: 2.0 }}
                            >
                                💥
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </motion.section>

            {/* Other Sections with Scroll Animations */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <TopRatedMovies></TopRatedMovies>
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <RecentlyAdded></RecentlyAdded>
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <GenreSection></GenreSection>
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <AboutSection></AboutSection>
            </motion.section>
        </div>
    );
};

export default Home;
