import React, { useEffect, useState, use } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { deleteMovie, getLoggedUserMovies } from "../components/homeComponenets/movieApI";
import { AuthContext } from "../provider/AuthContext";
import { Star } from "lucide-react";

const MyCollection = () => {
    const { user, theme } = use(AuthContext);
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch only user's movies
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

    // Delete Movie
    const handleDelete = async (id) => {
        const confirm = await Swal.fire({
            title: "Delete this movie?",
            text: "This action cannot be undone!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Delete",
            cancelButtonText: "Cancel"
        });

        if (!confirm.isConfirmed) return;

        try {
            await deleteMovie(id);
            Swal.fire("Deleted!", "Movie removed successfully.", "success");

            // Remove from UI instantly
            setMovies(movies.filter(m => m._id !== id));
        } catch (err) {
            Swal.fire("Error", "Unable to delete movie.", "error");
        }
    };

    if (loading) return <div className="text-center mt-10 text-lg">Loading...</div>;

    return (
        <div className="py-16 md:px-12 mx-auto my-12 px-4">

            <h1 className="border-l-5 border-[#f97316] pl-3 text-4xl font-bold mb-4">
                My Movie Collection
            </h1>

            {movies.length === 0 && (
                <p className="text-center text-4xl min-h-[450px] text-gray-500 mt-10">
                    You haven't added any movies yet.
                </p>
            )}

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

                        {/* Rating */}
                        <div className="flex items-center justify-center gap-1 text-yellow-400 mb-2">
                            <Star className="w-5 h-5 fill-yellow-400" />
                            <span className="text-sm font-bold">
                                {parseInt(movie.rating)?.toFixed(1)}
                            </span>
                        </div>

                        {/* Genre and Year */}
                        <div className="flex justify-between items-center gap-5 mb-5">
                            <p className="text-gray-400 text-sm">
                                {movie.genre || "Unknown Genre"}
                            </p>
                            <p className="text-gray-500 text-sm">
                                {movie.releaseYear ? `Released: ${movie.releaseYear}` : ""}
                            </p>
                        </div>

                        <div className="flex justify-between mt-4">
                            {/* Edit */}
                            <Link
                                to={`/movies/edit/${movie._id}`}
                                className="bg-[#f97316] hover:bg-[#bb4f02] text-white px-5 py-2 rounded-3xl "
                            >
                              ✒️  Edit
                            </Link>

                            {/* Delete */}
                            <button
                                onClick={() => handleDelete(movie._id)}
                                className="bg-red-500 text-white px-5 py-2 rounded-3xl hover:bg-red-600"
                            >
                              🗑️  Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default MyCollection;
