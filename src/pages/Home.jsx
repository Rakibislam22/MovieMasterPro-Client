import React, { useEffect, useState } from "react";
import HeroSection from "../components/homeComponenets/HeroSection";
import { getStats } from "../components/homeComponenets/movieApI";
import TopRatedMovies from "../components/homeComponenets/TopRatedMovies";
import RecentlyAdded from "../components/homeComponenets/RecentlyAdded";
import GenreSection from "../components/homeComponenets/GenreSection";
import AboutSection from "../components/homeComponenets/AboutSection";

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
            <section className="pt-30 pb-20 text-white text-center bg-gradient-to-b from-black via-black/30 to-transparent">
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
                        <h2 className="text-5xl font-extrabold text-[#f97316] mb-3">
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
            <section>
                <TopRatedMovies></TopRatedMovies>
            </section>
            <section>
                <RecentlyAdded></RecentlyAdded>
            </section>
            <section>
                <GenreSection></GenreSection>
            </section>
            <section>
                <AboutSection></AboutSection>
            </section>
        </div>

    );
};

export default Home;
