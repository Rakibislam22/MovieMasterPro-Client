import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import { toast } from "react-toastify";

const UpdateMovie = () => {
    const { id } = useParams();
    const { theme, user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        genre: "",
        releaseYear: "",
        director: "",
        cast: "",
        rating: "",
        duration: "",
        language: "",
        country: "",
        plotSummary: "",
        posterUrl: "",
        addedBy: "",
    });

    const [loading, setLoading] = useState(true);

    // Load existing movie
    useEffect(() => {
        const loadMovie = async () => {
            try {
                const res = await fetch(`http://localhost:3000/movies/${id}`);
                const data = await res.json();
                setFormData({
                    title: data.title,
                    genre: data.genre,
                    releaseYear: data.releaseYear,
                    director: data.director,
                    cast: data.cast,
                    rating: data.rating,
                    duration: data.duration,
                    language: data.language,
                    country: data.country,
                    plotSummary: data.plotSummary,
                    posterUrl: data.posterUrl,
                    addedBy: data.addedBy,
                });
            } catch (err) {
                toast.error("Failed to load movie details!");
            } finally {
                setLoading(false);
            }
        };

        loadMovie();
    }, [id]);

    // Handle Input
    const handleChange = (e) => {
        if (e.target.name === "addedBy") return;
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Submit Update
    const handleUpdate = async (e) => {
        e.preventDefault();

        const payload = {
            ...formData,
            releaseYear: parseInt(formData.releaseYear),
            rating: parseFloat(formData.rating),
            duration: parseInt(formData.duration),
            addedBy: user.email,
        };

        try {
            const res = await fetch(`http://localhost:3000/movies/update/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const result = await res.json();

            if (!res.ok || !result.modifiedCount) {
                throw new Error("Failed to update movie");
            }

            toast.success("Movie updated successfully!");
            navigate(`/movies/${id}`);
        } catch (err) {
            toast.error("Update failed: " + err.message);
        }
    };

    // 🔥 CLEAN FULLSCREEN LOADING SCREEN
    if (loading) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50">
                <div className="h-16 w-16 border-4 border-[#f97316] border-t-transparent animate-spin rounded-full"></div>
            </div>
        );
    }

    return (
        <div
            className={`my-20 max-w-3xl mx-auto mt-10 p-6 rounded-2xl shadow-lg ${theme === "dark"
                    ? "bg-gray-900 text-gray-200"
                    : "bg-white text-gray-800"
                }`}
        >
            <h1 className="text-3xl font-bold mb-6 text-center">Update Movie</h1>

            <form onSubmit={handleUpdate} className="space-y-4">
                {/* Title */}
                <input
                    type="text"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    placeholder="Movie Title"
                />

                {/* Genre */}
                <input
                    type="text"
                    name="genre"
                    required
                    value={formData.genre}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    placeholder="Genre"
                />

                {/* Release Year */}
                <input
                    type="number"
                    name="releaseYear"
                    required
                    value={formData.releaseYear}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    placeholder="Release Year"
                />

                {/* Director */}
                <input
                    type="text"
                    name="director"
                    required
                    value={formData.director}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    placeholder="Director"
                />

                {/* Cast */}
                <input
                    type="text"
                    name="cast"
                    required
                    value={formData.cast}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    placeholder="Cast (comma separated)"
                />

                {/* Rating */}
                <input
                    type="number"
                    step="0.1"
                    name="rating"
                    required
                    value={formData.rating}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    placeholder="Rating (0-10)"
                />

                {/* Duration */}
                <input
                    type="number"
                    name="duration"
                    required
                    value={formData.duration}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    placeholder="Duration (mins)"
                />

                {/* Language */}
                <input
                    type="text"
                    name="language"
                    required
                    value={formData.language}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    placeholder="Language"
                />

                {/* Country */}
                <input
                    type="text"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    placeholder="Country"
                />

                {/* Poster URL */}
                <input
                    type="text"
                    name="posterUrl"
                    required
                    value={formData.posterUrl}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    placeholder="Poster URL"
                />

                {/* Plot Summary */}
                <textarea
                    name="plotSummary"
                    required
                    rows="3"
                    value={formData.plotSummary}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    placeholder="Plot Summary"
                />

                {/* ADDED BY */}
                <input
                    type="text"
                    name="addedBy"
                    disabled
                    value={formData.addedBy}
                    className="w-full p-3 border rounded-lg bg-gray-200 text-gray-600 cursor-not-allowed"
                />

                <button
                    type="submit"
                    className="w-full bg-[#f97316] hover:bg-[#bb4f02] text-white py-3 rounded-lg text-lg"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default UpdateMovie;
