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

  // 🧠 Fetch movie by ID
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

  console.log(movie);

  // 🗑️ Delete movie
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

  // ✏️ Edit movie (redirect to edit page)
  const handleEdit = () => {
    navigate(`/movies/edit/${id}`);
  };

  if (loading) return <div className="text-center mt-10 text-lg">Loading...</div>;
  if (!movie) return <div className="text-center mt-10 text-red-500">Movie not found.</div>;

  return (
    <div className={`my-20 max-w-4xl mx-auto ${theme == "dark" ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"} p-6 rounded-2xl shadow-lg mt-10`}>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Poster */}
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="w-full md:w-1/3 rounded-xl shadow-md object-cover"
        />

        {/* Info */}
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
            <p className={`${theme == "dark" ? "text-gray-300" : "text-gray-600"}  dark: mt-1`}>{movie.plotSummary}</p>
          </div>

          {/* Buttons */}
          <div className={`flex gap-4 mt-5 ${user?.email == movie.addedBy ? " " : "hidden"}`}>
            <button
              onClick={handleEdit}
              className="bg-[#f97316] hover:bg-[#bb4f02] text-white px-5 py-2 rounded-3xl "
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
  );
};

export default MovieDetails;
