import React, { useEffect, useState, lazy, useRef } from 'react';
import { getMovies } from '../components/homeComponenets/movieApI';
import NoMovies from '../components/NoMovies';

// 🔹 Lazy load Movie component
const Movie = lazy(() => import('../components/Movie'));

const MovieSkeleton = ({ index }) => (
    <div
        key={index}
        className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-900 animate-pulse"
    >
        {/* Image skeleton */}
        <div className="h-64 bg-gray-300 dark:bg-gray-700" />

        {/* Content skeleton */}
        <div className="p-4 space-y-3">
            <div className="h-5 w-3/4 bg-gray-300 dark:bg-gray-700 rounded" />
            <div className="h-4 w-1/3 bg-gray-300 dark:bg-gray-700 rounded mx-auto" />
            <div className="flex justify-between gap-4">
                <div className="h-3 w-1/3 bg-gray-300 dark:bg-gray-700 rounded" />
                <div className="h-3 w-1/3 bg-gray-300 dark:bg-gray-700 rounded" />
            </div>
            <div className="h-9 w-full bg-gray-300 dark:bg-gray-700 rounded-full" />
        </div>
    </div>
);

const AllMovies = () => {
    const [movies, setMovies] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [ratingRange, setRatingRange] = useState([0, 10]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [visibleCount, setVisibleCount] = useState(8);
    const [chunkLoading, setChunkLoading] = useState(false);

    const loaderRef = useRef(null);

    const genresList = ["Action", "Drama", "Comedy", "Sci-Fi", "Horror", "Romance"];

    const fetchData = async () => {
        try {
            setLoading(true);

            let query = "?";

            if (search.trim()) {
                query += `search=${search}&`;
            }

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
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [selectedGenres, ratingRange, search]);

    useEffect(() => {
        setVisibleCount(8);
    }, [movies]);

    // 🔹 Scroll based auto load
    useEffect(() => {
        if (loading) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (
                    entries[0].isIntersecting &&
                    !chunkLoading &&
                    visibleCount < movies.length
                ) {
                    setChunkLoading(true);

                    setTimeout(() => {
                        setVisibleCount(prev => prev + 8);
                        setChunkLoading(false);
                    }, 800);
                }
            },
            { threshold: 1 }
        );

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => observer.disconnect();
    }, [loading, chunkLoading, visibleCount, movies.length]);

    const toggleGenre = (genre) => {
        setSelectedGenres(prev =>
            prev.includes(genre)
                ? prev.filter(g => g !== genre)
                : [...prev, genre]
        );
    };

    return (
        <div className='px-4 xl:px-12 mx-auto pt-15 pb-25'>

            <h1 className='border-l-6 border-[#f97316] pl-3 text-4xl font-bold mb-8'>
                All Movies <span className='text-[#f97316]'>({movies.length})</span>
            </h1>

            {/* Search Bar */}
            <input
                type="text"
                placeholder="Search movies..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="mb-6 w-full max-w-md px-5 py-2 border border-gray-400 rounded-3xl focus:outline-none"
            />

            {/* Filters */}
            <div className="mb-6 flex flex-col gap-4">
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
            {loading ? (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {[...Array(8)].map((_, i) => (
                        <MovieSkeleton key={i} index={i} />
                    ))}
                </div>
            ) : movies.length === 0 ? (
                <NoMovies></NoMovies>
            ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {movies.slice(0, visibleCount).map(movie => (
                        <Movie key={movie._id} movie={movie} />
                    ))}
                </div>
            )}

            {/* Scroll loader */}
            {!loading && visibleCount < movies.length && (
                <div ref={loaderRef} className="text-center mt-10 h-10">
                    {chunkLoading && (
                        <p className="text-gray-400 animate-pulse">
                            Loading movies...
                        </p>
                    )}
                </div>
            )}

        </div>
    );
};

export default AllMovies;
