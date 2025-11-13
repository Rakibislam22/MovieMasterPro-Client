import React, { useEffect, useState, useRef, use } from "react";
import HeroSection from "../components/homeComponenets/HeroSection";
import TopRatedMovies from "../components/homeComponenets/TopRatedMovies";
import RecentlyAdded from "../components/homeComponenets/RecentlyAdded";
import GenreSection from "../components/homeComponenets/GenreSection";
import AboutSection from "../components/homeComponenets/AboutSection";
import { getStats } from "../components/homeComponenets/movieApI";
import { motion, useMotionValue, useInView, animate } from "framer-motion";
import { AuthContext } from "../provider/AuthContext";

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
    const { theme } = use(AuthContext);

    const moviesValue = useMotionValue(0);
    const usersValue = useMotionValue(0);

    const [moviesDisplay, setMoviesDisplay] = useState(0);
    const [usersDisplay, setUsersDisplay] = useState(0);

    useEffect(() => {
        const unsubMovies = moviesValue.onChange((v) => setMoviesDisplay(Math.floor(v)));
        const unsubUsers = usersValue.onChange((v) => setUsersDisplay(Math.floor(v)));
        return () => {
            unsubMovies();
            unsubUsers();
        };
    }, [moviesValue, usersValue]);

    useEffect(() => {
        if (moviesInView && !stats.loading) {
            animate(moviesValue, stats.movies, { duration: 2, ease: "easeOut" });
        }
    }, [moviesInView, stats.loading, stats.movies]);

    useEffect(() => {
        if (usersInView && !stats.loading) {
            animate(usersValue, stats.users, { duration: 2, ease: "easeOut" });
        }
    }, [usersInView, stats.loading, stats.users]);

    return (
        <div>

            {/* 🔥 Full Page Loading Overlay */}
            {stats.loading && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
                    <div className="h-16 w-16 border-4 border-orange-500 border-t-transparent animate-spin rounded-full"></div>
                </div>
            )}

            <div className="bg-black min-h-screen text-white">
                <HeroSection />
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
                        className={`${theme == "dark" ? "bg-gray-800 " : "bg-white "} p-8 rounded-2xl shadow-md hover:shadow-lg transition relative overflow-hidden`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0, scale: [1, 1.1, 1] }}
                        transition={{ duration: 0.8, ease: "easeIn", delay: 0.1 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <h2 className="text-5xl font-extrabold text-[#f97316] mb-3">
                            {stats.loading ? "..." : moviesDisplay}
                        </h2>
                        <p className={`text-lg ${theme == "dark" ? "text-gray-200" : "text-gray-800"} opacity-90 font-medium`}>
                            Total Movies
                        </p>

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
                        className={`${theme == "dark" ? "bg-gray-800 " : "bg-white "} p-8 rounded-2xl shadow-md hover:shadow-lg transition relative overflow-hidden`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0, scale: [1, 1.1, 1] }}
                        transition={{ duration: 0.8, ease: "easeIn", delay: 0.2 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <h2 className="text-5xl font-extrabold text-blue-400 mb-3">
                            {stats.loading ? "..." : usersDisplay}
                        </h2>
                        <p className={`text-lg ${theme == "dark" ? "text-gray-200" : "text-gray-800"} opacity-90 font-medium`}>
                            Total Users
                        </p>

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

            {/* Home page sections */}
            <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                <TopRatedMovies jump="top-rated" />
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}>
                <RecentlyAdded jump="recent" />
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
                <GenreSection jump="genres" />
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}>
                <AboutSection jump="about" />
            </motion.section>

        </div>
    );
};

export default Home;
