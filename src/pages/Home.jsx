import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import { getStats } from "../components/movieApI";

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

    return (
        <div>
            <div className="bg-black min-h-screen text-white">
                <HeroSection />

            </div>
            <section className="py-16 text-white text-center">
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
                        <h2 className="text-5xl font-extrabold text-red-500 mb-3">
                            {stats.loading ? "..." : stats.movies}
                        </h2>
                        <p className="text-lg opacity-90 font-medium">Total Movies</p>
                    </div>

                    <div className="bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
                        <h2 className="text-5xl font-extrabold text-blue-400 mb-3">
                            {stats.loading ? "..." : stats.users}
                        </h2>
                        <p className="text-lg opacity-90 font-medium">Total Users</p>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default Home;
