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
