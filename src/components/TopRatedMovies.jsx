import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Link } from "react-router";
import { getTopRatedMovies } from "./movieApI";

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
    <section className="text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-red-500 mb-2">
          ⭐ Top Rated Movies
        </h2>
        <p className="text-gray-400">The top 5 movies loved by our users</p>
      </div>

      {loading ? (
        <div className="text-center text-gray-400">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <div
              key={movie._id}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-md hover:scale-[1.03] transition-transform duration-300"
            >
              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold truncate">
                  {movie.title}
                </h3>
                <div className="flex items-center justify-center gap-1 text-yellow-400 mt-2">
                  <Star className="w-5 h-5 fill-yellow-400" />
                  <span className="text-sm font-bold">{movie.rating.toFixed(1)}</span>
                </div>

                <Link
                  to={`/movie/${movie._id}`}
                  className="block mt-4 bg-[#f97316] hover:bg-[#bb4f02] text-white text-sm font-semibold py-2 rounded-full transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default TopRatedMovies;
