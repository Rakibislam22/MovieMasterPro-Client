import React, { use, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { deleteMovie, getMoviesDetails } from "../components/homeComponenets/movieApI";
import { AuthContext } from "../provider/AuthContext";

const MovieDetails = () => {
  const { id } = useParams();
  const { user, theme } = use(AuthContext);
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await getMoviesDetails(`/movies/${id}`);
        setMovie(res);
      } catch (err) {
        console.error("Error fetching movie:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  const handleDelete = async () => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This movie will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (confirm.isConfirmed) {
      try {
        await deleteMovie(id);
        Swal.fire("Deleted!", "The movie has been removed.", "success");
        navigate("/movies");
      } catch (err) {
        Swal.fire("Error!", "Failed to delete the movie.", "error");
      }
    }
  };

  const handleEdit = () => {
    navigate(`/dashboard/movies/update/${id}`);
  };

  if (loading)
    return (
      <div
        className={`my-20 max-w-4xl mx-auto p-6 rounded-2xl shadow-lg animate-pulse ${theme === "dark" ? "bg-gray-900" : "bg-white"
          }`}
      >
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3 h-80 rounded-xl bg-gray-300 dark:bg-gray-700" />
          <div className="flex-1 space-y-4">
            <div className="h-8 w-3/4 bg-gray-300 dark:bg-gray-700 rounded" />
            <div className="h-4 w-1/2 bg-gray-300 dark:bg-gray-700 rounded" />
            <div className="h-20 w-full bg-gray-300 dark:bg-gray-700 rounded" />
          </div>
        </div>
      </div>
    );

  if (!movie)
    return <div className="text-center mt-10 text-red-500">Movie not found.</div>;

  return (
    <>
      <div
        className={`my-20 max-w-4xl mx-auto ${theme == "dark" ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"
          } p-6 rounded-2xl shadow-lg mt-10`}
      >
        <button
          onClick={() => navigate(-1)}
          className="mb-4 px-4 py-2 rounded-full bg-gray-600 text-white hover:bg-gray-700"
        >
          ← Back
        </button>

        <div className="flex flex-col md:flex-row gap-6">

          <div className="relative group w-full md:w-1/2">
            <img
              src={movie.posterUrl}
              alt={movie.title}
              className="w-fit h-full rounded-xl shadow-md object-cover"
            />
            <label
              htmlFor="imageModal"
              className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer transition rounded-xl"
            >
              <span className="text-white font-semibold text-lg">View</span>
            </label>
          </div>

          <div className="flex-1 space-y-3">
            <h1 className="text-3xl font-bold">{movie.title}</h1>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>Release Year:</strong> {movie.releaseYear}</p>
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Cast:</strong> {movie.cast}</p>
            <p><strong>Rating:</strong> ⭐ {movie.rating}/10</p>
            <p><strong>Duration:</strong> {movie.duration} min</p>
            <p><strong>Language:</strong> {movie.language}</p>
            <p><strong>Country:</strong> {movie.country}</p>
            <p><strong>Added By:</strong> {movie.addedBy}</p>
            <div>
              <strong>Plot Summary:</strong>
              <p className={`${theme == "dark" ? "text-gray-300" : "text-gray-600"} mt-1`}>
                {movie.plotSummary}
              </p>
            </div>

            <div className={`flex gap-4 mt-5 ${user?.email == movie.addedBy ? "" : "hidden"}`}>
              <button
                onClick={handleEdit}
                className="bg-[#f97316] hover:bg-[#bb4f02] text-white px-5 py-2 rounded-3xl"
              >
                ✒️ Edit
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-5 py-2 rounded-3xl hover:bg-red-600"
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* DaisyUI Modal */}
      <input type="checkbox" id="imageModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box max-w-3xl p-0 flex justify-center items-center">
          <img src={movie.posterUrl} alt={movie.title} className="w-fit" />
        </div>
        <label className="modal-backdrop" htmlFor="imageModal"></label>
      </div>
    </>
  );
};

export default MovieDetails;
