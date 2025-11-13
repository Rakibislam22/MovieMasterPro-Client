export const getMovies = async () =>{
    const res = await fetch('http://localhost:3000/movies');
    return await res.json();
}

export const getFeaturedMovies = async () => {
    const res = await fetch('http://localhost:3000/hero-movies');
    return await res.json();
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
    const res = await fetch("http://localhost:3000/top-rated-movies");
    return await res.json();

};

export const getMoviesDetails = async (url) => {
    const res = await fetch(`http://localhost:3000${url}`);
    return await res.json();

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
