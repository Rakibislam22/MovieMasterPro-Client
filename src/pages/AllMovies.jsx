import React, { useEffect, useState } from 'react';
import { getMovies } from '../components/homeComponenets/movieApI';
import Movie from '../components/Movie';

const AllMovies = () => {
    const [movies, setMovies] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [ratingRange, setRatingRange] = useState([0, 10]);
    const [loading, setLoading] = useState(true);

    const genresList = ["Action", "Drama", "Comedy", "Sci-Fi", "Horror", "Romance"];

    const fetchData = async () => {
        try {
            setLoading(true); // ⬅️ Start loading

            let query = "?";

            if (selectedGenres.length > 0) {
                query += `genres=${selectedGenres.join(",")}&`;
            }

            if (ratingRange.length === 2) {
                query += `minRating=${ratingRange[0]}&maxRating=${ratingRange[1]}`;
            }

            const data = await getMovies(query);
            setMovies(data);

        } catch (error) {
            console.error("Error fetching movies:", error);
        } finally {
            setLoading(false); // ⬅️ Stop loading
        }
    };

    useEffect(() => {
        fetchData();
    }, [selectedGenres, ratingRange]);

    const toggleGenre = (genre) => {
        setSelectedGenres(prev =>
            prev.includes(genre)
                ? prev.filter(g => g !== genre)
                : [...prev, genre]
        );
    };

    return (
        <div className='px-4 xl:px-12 mx-auto pt-15 pb-25'>

            {/* 🔥 Loading Overlay */}
            {loading && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
                    <div className="h-14 w-14 border-4 border-orange-500 border-t-transparent animate-spin rounded-full"></div>
                </div>
            )}

            <h1 className='border-l-6 border-[#f97316] pl-3 text-4xl font-bold mb-8'>
                All Movies <span className='text-[#f97316]'>({movies.length})</span>
            </h1>

            {/* Filters */}
            <div className="mb-6 flex flex-col gap-4">

                {/* Genre Filter */}
                <div className="flex flex-wrap gap-3">
                    {genresList.map(genre => (
                        <button
                            key={genre}
                            onClick={() => toggleGenre(genre)}
                            className={`px-4 py-2 rounded-3xl border 
                                ${selectedGenres.includes(genre)
                                    ? "bg-orange-500 border-orange-500"
                                    : "border-gray-400"}`}
                        >
                            {genre}
                        </button>
                    ))}
                </div>

                {/* Rating Filter */}
                <div className="flex gap-3 items-center py-2">
                    <span>Rating:</span>

                    <input
                        type="number"
                        min="0"
                        max="10"
                        value={ratingRange[0]}
                        onChange={(e) => setRatingRange([e.target.value, ratingRange[1]])}
                        className="pl-5 border border-gray-400 rounded-3xl w-20"
                    />

                    <span>to</span>

                    <input
                        type="number"
                        min="0"
                        max="10"
                        value={ratingRange[1]}
                        onChange={(e) => setRatingRange([ratingRange[0], e.target.value])}
                        className="pl-5 border border-gray-400 rounded-3xl w-20"
                    />
                </div>

            </div>

            {/* Movie List */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
                {movies.map(movie => (
                    <Movie key={movie._id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default AllMovies;
