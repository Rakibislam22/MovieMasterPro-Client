import React, { useEffect, useState, use } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { deleteMovie, getLoggedUserMovies } from "../components/homeComponenets/movieApI";
import { AuthContext } from "../provider/AuthContext";
import { Star } from "lucide-react";

const MovieSkeleton = ({ theme }) => (
    <div
        className={`rounded-xl shadow-md p-4 animate-pulse
        ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
    >
        <div className="w-full h-64 bg-gray-300 dark:bg-gray-700 rounded-lg" />
        <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-700 rounded my-4 mx-auto" />
        <div className="h-4 w-1/3 bg-gray-300 dark:bg-gray-700 rounded mx-auto mb-3" />
        <div className="flex justify-between mb-5">
            <div className="h-4 w-1/3 bg-gray-300 dark:bg-gray-700 rounded" />
            <div className="h-4 w-1/3 bg-gray-300 dark:bg-gray-700 rounded" />
        </div>
        <div className="flex justify-between">
            <div className="h-10 w-24 bg-gray-300 dark:bg-gray-700 rounded-3xl" />
            <div className="h-10 w-24 bg-gray-300 dark:bg-gray-700 rounded-3xl" />
        </div>
    </div>
);

const MyCollection = () => {
    const { user, theme } = use(AuthContext);
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user?.email) return;

        const fetchMovies = async () => {
            try {
                const res = await getLoggedUserMovies(user.email);
                setMovies(res);
            } catch (err) {
                console.error("Error loading user movies:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [user]);

    const handleDelete = async (id) => {
        const confirm = await Swal.fire({
            title: "Delete this movie?",
            text: "This action cannot be undone!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Delete",
            cancelButtonText: "Cancel",
        });

        if (!confirm.isConfirmed) return;

        try {
            await deleteMovie(id);
            Swal.fire("Deleted!", "Movie removed successfully.", "success");
            setMovies(movies.filter((m) => m._id !== id));
        } catch (err) {
            Swal.fire("Error", "Unable to delete movie.", "error");
        }
    };

    return (
        <div className="pt-10">
            <h1 className="text-center text-5xl font-bold mb-2">
                My Movie <span className="text-[#f97316]">Collection</span>
            </h1>

            {loading ? (
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                    {[...Array(6)].map((_, i) => (
                        <MovieSkeleton key={i} theme={theme} />
                    ))}
                </div>
            ) : movies.length === 0 ? (
                <p className="text-center text-4xl min-h-[450px] text-gray-500 mt-10">
                    You haven't added any movies yet.
                </p>
            ) : (
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                    {movies.map((movie) => (
                        <div
                            key={movie._id}
                            className={`rounded-xl shadow-md p-4 transition hover:shadow-lg 
                            ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white"}`}
                        >
                            <img
                                src={movie.posterUrl}
                                alt={movie.title}
                                className="w-full h-64 object-cover rounded-lg"
                            />

                            <h3 className="text-2xl font-semibold truncate my-2 text-center">
                                {movie.title}
                            </h3>

                            <div className="flex items-center justify-center gap-1 text-yellow-400 mb-2">
                                <Star className="w-5 h-5 fill-yellow-400" />
                                <span className="text-sm font-bold">
                                    {parseInt(movie.rating)?.toFixed(1)}
                                </span>
                            </div>

                            <div className="flex justify-between items-center gap-5 mb-5">
                                <p className="text-gray-400 text-sm">
                                    {movie.genre || "Unknown Genre"}
                                </p>
                                <p className="text-gray-500 text-sm">
                                    {movie.releaseYear ? `Released: ${movie.releaseYear}` : ""}
                                </p>
                            </div>

                            <div className="flex justify-between mt-4">
                                <Link
                                    to={`/dashboard/movies/update/${movie._id}`}
                                    className="bg-[#f97316] hover:bg-[#bb4f02] text-white px-5 py-2 rounded-3xl"
                                >
                                    ✒️ Edit
                                </Link>

                                <button
                                    onClick={() => handleDelete(movie._id)}
                                    className="bg-red-500 text-white px-5 py-2 rounded-3xl hover:bg-red-600"
                                >
                                    🗑️ Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyCollection;
