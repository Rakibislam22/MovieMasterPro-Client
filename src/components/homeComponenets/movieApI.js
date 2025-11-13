export const getMovies = async () => {
    const res = await fetch('http://localhost:3000/movies');
    return await res.json();
}

export const getFeaturedMovies = async () => {
    const res = await fetch('http://localhost:3000/hero-movies');
    return await res.json();
};

export const getStats = async () => {
    const res = await fetch("http://localhost:3000/stats");
    return await res.json();
};


export const getTopRatedMovies = async () => {
    const res = await fetch("http://localhost:3000/top-rated-movies");
    return await res.json();

};

export const getMoviesDetails = async (url) => {
    const res = await fetch(`http://localhost:3000${url}`);
    return await res.json();

};

export const getRecentlyAddedMovies = async () => {
    const res = await fetch("http://localhost:3000/recently-added");
    return await res.json();
};

export const addMovie = async (newMovie) => {
    try {
        const res = await fetch("http://localhost:3000/movies/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newMovie),
        });

        if (!res.ok) {
            throw new Error("Failed to add movie");
        }

        return await res.json();

    } catch (err) {
        console.error("addMovie error:", err);
        throw err;
    }
};

export const getLoggedUserMovies = async (email) => {
    const res = await fetch(`http://localhost:3000/movies?addedBy=${email}`);
    return await res.json();
};



