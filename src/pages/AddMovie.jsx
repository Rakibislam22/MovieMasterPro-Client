import React, { useState, use } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import { toast } from "react-toastify";
import { addMovie } from "../components/homeComponenets/movieApI";

const AddMovie = () => {
    const { user, theme } = use(AuthContext);
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
    });

    // Handle Input Change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Submit Form
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user?.email) {
            toast.error("Unauthorized! You must be logged in to add a movie.");
            return;
        }

        const payload = {
            ...formData,
            releaseYear: parseInt(formData.releaseYear),
            rating: parseFloat(formData.rating),
            duration: parseInt(formData.duration),
            addedBy: user.email,
        };

        try {
            await addMovie(payload);
            toast.success("Movie added successfully!");
            navigate("/movies");
        } catch (err) {
            toast.error("Error adding movie: " + err.message);
        }
    };


    return (
        <div
            className={`max-w-3xl mx-auto mt-10 mb-30 p-6 rounded-2xl shadow-lg ${theme === "dark"
                ? "bg-gray-900 text-gray-200"
                : "bg-white text-gray-800"
                }`}
        >
            <h1 className="text-3xl font-bold mb-6 text-center">Add New Movie</h1>

            <form onSubmit={handleSubmit} className="space-y-4">

                {/* Title */}
                <input
                    type="text"
                    name="title"
                    placeholder="Movie Title"
                    required
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                />

                {/* Genre */}
                <input
                    type="text"
                    name="genre"
                    placeholder="Genre"
                    required
                    value={formData.genre}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                />

                {/* Release Year */}
                <input
                    type="number"
                    name="releaseYear"
                    placeholder="Release Year"
                    required
                    value={formData.releaseYear}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                />

                {/* Director */}
                <input
                    type="text"
                    name="director"
                    placeholder="Director Name"
                    required
                    value={formData.director}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                />

                {/* Cast */}
                <input
                    type="text"
                    name="cast"
                    placeholder="Cast (comma separated)"
                    required
                    value={formData.cast}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                />

                {/* Rating */}
                <input
                    type="number"
                    step="0.1"
                    name="rating"
                    placeholder="Rating (0 - 10)"
                    required
                    value={formData.rating}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                />

                {/* Duration */}
                <input
                    type="number"
                    name="duration"
                    placeholder="Duration (minutes)"
                    required
                    value={formData.duration}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                />

                {/* Language */}
                <input
                    type="text"
                    name="language"
                    placeholder="Language"
                    required
                    value={formData.language}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                />

                {/* Country */}
                <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                />

                {/* Poster URL */}
                <input
                    type="text"
                    name="posterUrl"
                    placeholder="Poster URL"
                    required
                    value={formData.posterUrl}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                />

                {/* Plot Summary */}
                <textarea
                    name="plotSummary"
                    placeholder="Plot Summary"
                    required
                    rows="3"
                    value={formData.plotSummary}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                />

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-[#f97316] hover:bg-[#bb4f02] text-white py-3 rounded-lg text-lg"
                >
                    Add Movie
                </button>
            </form>
        </div>
    );
};

export default AddMovie;
