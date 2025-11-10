export const getFeaturedMovies = async () => {
    // Replace this with your actual API endpoint later
    return [
        {
            _id: "1",
            title: "Inception",
            description:
                "A thief who steals corporate secrets through dream-sharing technology is given a task of inception.",
            bannerUrl:
                "https://images.squarespace-cdn.com/content/v1/5ec686197f8b2976074846c2/1618809593080-N5PB8CWYOW3OPDE2TT6E/Feature+3-1.png",
        },
        {
            _id: "2",
            title: "Interstellar",
            description:
                "A group of explorers travel through a wormhole in space in an attempt to ensure humanity’s survival.",
            bannerUrl:
                "https://images.squarespace-cdn.com/content/v1/5ec686197f8b2976074846c2/1618809593080-N5PB8CWYOW3OPDE2TT6E/Feature+3-1.png",
        },
        {
            _id: "3",
            title: "The Dark Knight",
            description:
                "Batman faces the Joker, a criminal mastermind who seeks to create chaos and test the limits of Gotham’s hero.",
            bannerUrl:
                "https://images.squarespace-cdn.com/content/v1/5ec686197f8b2976074846c2/1618809593080-N5PB8CWYOW3OPDE2TT6E/Feature+3-1.png",
        },
    ];
};

export const getStats = async () => {
    // Replace this with your real API endpoint later
    // Example: const res = await fetch("https://api.moviemasterpro.com/stats");
    // return await res.json();

    // Mocked data (for now)
    return {
        movies: 124,
        users: 586,
    };
};


export const getTopRatedMovies = async () => {
    // Replace with your backend endpoint later:
    // const res = await fetch("https://yourapi.com/api/top-rated");
    // return await res.json();

    // Mock Data for demo:
    return [
        {
            _id: "1",
            title: "The Shawshank Redemption",
            rating: 9.3,
            posterUrl:
                "https://image.tmdb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        },
        {
            _id: "2",
            title: "The Godfather",
            rating: 9.2,
            posterUrl:
                "https://image.tmdb.org/t/p/original/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        },
        {
            _id: "3",
            title: "The Dark Knight",
            rating: 9.0,
            posterUrl:
                "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        },
        {
            _id: "4",
            title: "Inception",
            rating: 8.8,
            posterUrl:
                "https://image.tmdb.org/t/p/original/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
        },
        {
            _id: "5",
            title: "Interstellar",
            rating: 8.6,
            posterUrl:
                "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
        },
    ];
};
