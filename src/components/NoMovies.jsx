import React, { useContext } from "react";
import { Film, SearchX } from "lucide-react";
import { AuthContext } from "../provider/AuthContext";

const NoMovies = ({
    title = "No movies found",
    subtitle = "Try adjusting your search or filters",
}) => {
    const { theme } = useContext(AuthContext);

    const isDark = theme === "dark";

    return (
        <div
            className={`w-full py-20 flex flex-col items-center justify-center rounded-2xl border
            ${isDark
                    ? "bg-gray-900 border-gray-800 text-gray-300"
                    : "bg-gray-50 border-gray-200 text-gray-700"
                }`}
        >
            {/* Icon */}
            <div
                className={`mb-6 p-5 rounded-full
                ${isDark ? "bg-gray-800" : "bg-white shadow-sm"}`}
            >
                <Film
                    className={`w-10 h-10 ${isDark ? "text-orange-400" : "text-orange-500"
                        }`}
                />
            </div>

            {/* Text */}
            <h2 className="text-2xl font-semibold mb-2">
                {title}
            </h2>

            <p
                className={`text-sm max-w-md text-center
                ${isDark ? "text-gray-400" : "text-gray-500"}`}
            >
                {subtitle}
            </p>

            {/* Hint */}
            <div
                className={`mt-6 flex items-center gap-2 text-sm
                ${isDark ? "text-gray-500" : "text-gray-400"}`}
            >
                <SearchX className="w-4 h-4" />
                <span>No results match your criteria</span>
            </div>
        </div>
    );
};

export default NoMovies;
