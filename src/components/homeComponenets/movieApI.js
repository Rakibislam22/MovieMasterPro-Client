export const getMovies = async (query = "") => {
    const res = await fetch(`http://localhost:3000/movies${query}`);
    if (!res.ok) throw new Error("Failed to fetch movies");
    return res.json();
};

export const getFeaturedMovies = async () => {
    const res = await fetch('http://localhost:3000/hero-movies');
    if (!res.ok) throw new Error("Failed to fetch featured movies");
    return res.json();
};

export const getStats = async () => {
    const res = await fetch("http://localhost:3000/stats");
    if (!res.ok) throw new Error("Failed to fetch stats");
    return res.json();
};

export const getTopRatedMovies = async () => {
    const res = await fetch("http://localhost:3000/top-rated-movies");
    if (!res.ok) throw new Error("Failed to fetch top rated movies");
    return res.json();
};

export const getMoviesDetails = async (url) => {
    const res = await fetch(`http://localhost:3000${url}`);
    if (!res.ok) throw new Error("Failed to fetch movie details");
    return res.json();
};

export const getRecentlyAddedMovies = async () => {
    const res = await fetch("http://localhost:3000/recently-added");
    if (!res.ok) throw new Error("Failed to fetch recently added movies");
    return res.json();
};

export const addMovie = async (newMovie) => {
    try {
        const res = await fetch("http://localhost:3000/movies/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newMovie),
        });

        if (!res.ok) throw new Error("Failed to add movie");

        return res.json();

    } catch (err) {
        console.error("addMovie error:", err);
        throw err;
    }
};

export const getLoggedUserMovies = async (email) => {
    const res = await fetch(`http://localhost:3000/movies?addedBy=${email}`);
    if (!res.ok) throw new Error("Failed to load user movies");
    return res.json();
};

export const deleteMovie = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/movies/${id}`, {
            method: "DELETE",
        });

        if (!res.ok) throw new Error("Failed to delete movie");

        return res.json();

    } catch (err) {
        console.error("deleteMovie error:", err);
        throw err;
    }
};


