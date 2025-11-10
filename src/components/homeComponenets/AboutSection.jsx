import React from "react";
import { Film, Sparkles, Users, ShieldCheck } from "lucide-react";
import { Link } from "react-router";

const AboutSection = () => {
    return (
        <section className="py-16 px-6 md:px-12">
            <h2 className="border-l-6 border-[#f97316] pl-3 text-4xl md:text-5xl font-bold mb-4">
                About <span className='text-[#f97316]'>Movie</span>Master Pro
            </h2>
            <div className="grid gap-5 lg:grid-cols-2 items-center">
                <div>
                    <p className="text-gray-400 max-w-prose leading-relaxed mb-6">
                        MovieMaster Pro is a modern, all-in-one movie management platform
                        designed for cinephiles, critics, and casual viewers alike. Browse
                        curated collections, build personal libraries, track top-rated
                        films, and discover new favorites — all with a fast, cinematic UI.
                    </p>

                    <ul className="grid gap-3 text-gray-400 mb-6">
                        <li className="flex items-start gap-3">
                            <Sparkles className="w-5 h-5 text-amber-400 mt-1" />
                            <span>
                                Curated & personalized recommendations powered by user ratings
                                and collections.
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Film className="w-5 h-5 text-[#f97316] mt-1" />
                            <span>
                                Full movie pages with posters, trailers, cast, genres, and
                                release info.
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Users className="w-5 h-5 text-blue-400 mt-1" />
                            <span>
                                Social features — follow users, create public collections, and
                                leave reviews.
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <ShieldCheck className="w-5 h-5 text-green-400 mt-1" />
                            <span>
                                Secure account management, role-based access, and privacy
                                controls.
                            </span>
                        </li>
                    </ul>

                </div>

                {/* Right: feature cards */}
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                    <div className="bg-gray-900 p-6 rounded-2xl shadow-md hover:translate-y-[-4px] transition-transform">
                        <h3 className="text-xl font-semibold text-[#f97316] mb-2">Personal Collections</h3>
                        <p className="text-gray-300 text-sm">
                            Create private or public collections, add notes, and organize
                            movies by mood, franchise, or watchlist.
                        </p>
                    </div>

                    <div className="bg-gray-900 p-6 rounded-2xl shadow-md hover:translate-y-[-4px] transition-transform">
                        <h3 className="text-xl font-semibold text-[#f97316] mb-2">Advanced Filters</h3>
                        <p className="text-gray-300 text-sm">
                            Filter by genre, year, rating, cast, or custom tags to quickly
                            find exactly what you want to watch.
                        </p>
                    </div>

                    <div className="bg-gray-900 p-6 rounded-2xl shadow-md hover:translate-y-[-4px] transition-transform">
                        <h3 className="text-xl font-semibold text-[#f97316] mb-2">Top-Rated & Trending</h3>
                        <p className="text-gray-300 text-sm">
                            Discover top-rated movies, trending lists, and community favorites.
                        </p>
                    </div>

                    <div className="bg-gray-900 p-6 rounded-2xl shadow-md hover:translate-y-[-4px] transition-transform">
                        <h3 className="text-xl font-semibold text-[#f97316] mb-2">Cross-Platform</h3>
                        <p className="text-gray-300 text-sm">
                            Lightweight, fast UI that works great on desktop and mobile — plug
                            into your backend or use our API.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
