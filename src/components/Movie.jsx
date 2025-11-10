import { Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const Movie = ({ movie }) => {
    return (
        <div
            key={movie._id}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-md hover:scale-[1.03] transition-transform duration-300"
        >
            {/* Movie Poster */}
            <img
                src={movie.posterUrl}
                alt={movie.title}
                className="w-full h-64 object-cover"
            />

            {/* Movie Info */}
            <div className="p-4 text-center">
                <h3 className="text-lg font-semibold truncate mb-2">
                    {movie.title}
                </h3>

                {/* Rating */}
                <div className="flex items-center justify-center gap-1 text-yellow-400 mb-2">
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <span className="text-sm font-bold">
                        {movie.rating?.toFixed(1)}
                    </span>
                </div>

                {/* Genre and Year */}
                <p className="text-gray-400 text-sm">
                    {movie.genre || "Unknown Genre"}
                </p>
                <p className="text-gray-500 text-xs mb-4">
                    {movie.releaseYear ? `Released: ${movie.releaseYear}` : ""}
                </p>

                {/* Details Button */}
                <Link
                    to={`/movie/${movie._id}`}
                    className="block mt-2 bg-[#f97316] hover:bg-[#bb4f02] text-white text-sm font-semibold py-2 rounded-full transition"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default Movie;