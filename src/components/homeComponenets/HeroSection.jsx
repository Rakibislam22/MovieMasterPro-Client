import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router";
import { getFeaturedMovies } from "./movieApI";

const HeroSection = () => {
  const [featuredMovies, setFeaturedMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getFeaturedMovies();
        setFeaturedMovies(data);
      } catch (error) {
        console.error("Error fetching featured movies:", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <section className="w-full h-[90vh] relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        {featuredMovies.map((movie) => (
          <SwiperSlide key={movie._id}>
            <div
              className="relative w-full h-[90vh] bg-cover bg-center flex items-end"
              style={{
                backgroundImage: `url(${movie.posterUrl})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

              <div className="relative z-10 text-white px-10 md:px-20 pb-20 max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                  {movie.title}
                </h1>
                <p className="text-sm md:text-lg mb-6 opacity-90 leading-relaxed">
                  {movie.plotSummary.slice(0, 150)}...
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to={`/movies/${movie._id}`}
                    className="bg-[#f97316] hover:bg-[#bb4f02] text-white px-6 py-3 rounded-full font-semibold transition"
                  >
                    View Details
                  </Link>

                  <Link
                    to={`/favorites`}
                    className="bg-white/20 hover:bg-white/30 border border-white text-white px-6 py-3 rounded-full font-semibold transition"
                  >
                     Add to Watchlist
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
