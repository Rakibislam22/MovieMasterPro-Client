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
            releaseYear: 2020,
            posterUrl:
                "https://image.tmdb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        },
        {
            _id: "2",
            title: "The Godfather",
            rating: 9.2,
            releaseYear: 2021,
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
            releaseYear: 2023,
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

export const getRecentlyAddedMovies = async () => {
  // Replace with your real API later:
  // const res = await fetch("https://yourapi.com/api/movies/recent");
  // return await res.json();

  // Mocked recent 6 movies:
  return [
    {
      _id: "10",
      title: "Oppenheimer",
      releaseDate: "2023-07-21",
      posterUrl:
        "https://image.tmdb.org/t/p/original/bAFmcrUj0R9D2g0j8dZT5LGN4uO.jpg",
    },
    {
      _id: "11",
      title: "Dune: Part Two",
      releaseDate: "2024-03-01",
      posterUrl:
        "https://image.tmdb.org/t/p/original/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    },
    {
      _id: "12",
      title: "John Wick: Chapter 4",
      releaseDate: "2023-03-24",
      posterUrl:
        "https://image.tmdb.org/t/p/original/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    },
    {
      _id: "13",
      title: "Guardians of the Galaxy Vol. 3",
      releaseDate: "2023-05-05",
      posterUrl:
        "https://image.tmdb.org/t/p/original/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    },
    {
      _id: "14",
      title: "Spider-Man: Across the Spider-Verse",
      releaseDate: "2023-06-02",
      posterUrl:
        "https://image.tmdb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    },
    {
      _id: "15",
      title: "Barbie",
      releaseDate: "2023-07-21",
      posterUrl:
        "https://image.tmdb.org/t/p/original/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    },
  ];
};
