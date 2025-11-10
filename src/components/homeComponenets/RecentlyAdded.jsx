import React, { useEffect, useState } from "react";
import { getRecentlyAddedMovies } from "./movieApI";
import Movie from "../Movie";

const RecentlyAdded = () => {
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
        <section className=" py-16 px-6 md:px-12">
            <div className="mb-12">
                <h2 className="border-l-6 border-[#f97316]  text-4xl md:text-5xl font-bold pl-3  mb-2">
                    Recently Added
                </h2>
                <p className="text-gray-400">Check out the latest movies in the system</p>
            </div>

            {loading ? (
                <div className="text-center text-gray-400">Loading...</div>
            ) : (
                <div className="text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                    {movies.map((movie) => (
                        <Movie movie={movie}></Movie>
                    ))}
                </div>
            )}
        </section>
    );
};

export default RecentlyAdded;
