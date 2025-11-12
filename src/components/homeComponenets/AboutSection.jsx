import React from "react";
import { Film, Sparkles, Users, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = ({ jump }) => {
    return (
        <motion.section
            id={jump}
            className="py-16 px-6 md:px-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <motion.h2
                className="border-l-5 border-[#f97316] pl-3 text-4xl md:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                About Movie<span className="text-[#f97316]">Master</span> Pro
            </motion.h2>

            <motion.div
                className="grid gap-5 lg:grid-cols-2 items-center"
                initial="hidden"
                whileInView="visible"
                transition={{ staggerChildren: 0.15 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
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
                </motion.div>

                {/* Right Side Cards */}
                <motion.div
                    className="grid gap-4 grid-cols-1 sm:grid-cols-2"
                    initial="hidden"
                    whileInView="visible"
                    transition={{ staggerChildren: 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {[
                        {
                            title: "Personal Collections",
                            desc: "Create private or public collections, add notes, and organize movies by mood, franchise, or watchlist.",
                            delay: 0.1,
                        },
                        {
                            title: "Advanced Filters",
                            desc: "Filter by genre, year, rating, cast, or custom tags to quickly find exactly what you want to watch.",
                            delay: 0.2,
                        },
                        {
                            title: "Top-Rated & Trending",
                            desc: "Discover top-rated movies, trending lists, and community favorites.",
                            delay: 0.3,
                        },
                        {
                            title: "Cross-Platform",
                            desc: "Lightweight, fast UI that works great on desktop and mobile — plug into your backend or use our API.",
                            delay: 0.4,
                        },
                    ].map((card, i) => (
                        <motion.div
                            key={i}
                            className="bg-gray-900 p-6 rounded-2xl shadow-md hover:translate-y-[-4px] transition-transform"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: card.delay, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <h3 className="text-xl font-semibold text-[#f97316] mb-2">
                                {card.title}
                            </h3>
                            <p className="text-gray-300 text-sm">{card.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default AboutSection;
