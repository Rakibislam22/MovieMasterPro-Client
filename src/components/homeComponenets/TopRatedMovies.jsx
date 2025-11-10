import React, { useEffect, useState } from "react";
import { getTopRatedMovies } from "./movieApI";
import Movie from "../Movie";

const TopRatedMovies = () => {
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
    <section className=" py-16 px-6 md:px-12">
      <div className="mb-12">
        <h2 className="border-l-6 border-[#f97316] pl-3 text-4xl md:text-5xl font-bold mb-2">
          Top Rated Movies
        </h2>
        <p className="text-gray-400">The top 5 movies loved by our users</p>
      </div>

      {loading ? (
        <div className="text-center text-gray-400">Loading...</div>
      ) : (
        <div className="text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <Movie movie={movie}></Movie>
          ))}
        </div>
      )}
    </section>
  );
};

export default TopRatedMovies;
