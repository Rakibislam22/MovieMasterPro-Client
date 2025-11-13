import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { AuthContext } from "../provider/AuthContext";
import { use } from "react";

const ErrorPage = () => {
    const { theme } = use(AuthContext);

    return (
        <div
            className={`min-h-screen flex flex-col justify-center items-center px-6 
            ${theme === "dark" ? "bg-black text-white" : "bg-gray-100 text-gray-900"}`}
        >
            {/* Animated Icon */}
            <motion.div
                initial={{ scale: 0, rotate: 0, opacity: 0 }}
                animate={{ scale: 1, rotate: 360, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="mb-6"
            >
                <AlertTriangle
                    className="w-28 h-28 text-[#f97316]"
                    strokeWidth={1.2}
                />
            </motion.div>

            {/* Heading */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl font-extrabold mb-2 text-center"
            >
                Oops! Page Not Found
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg opacity-80 max-w-xl text-center mb-8"
            >
                The page you are looking for might have been removed,
                renamed, or is temporarily unavailable.
            </motion.p>

            {/* Back Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <Link
                    to="/"
                    className="px-6 py-3 bg-[#f97316] hover:bg-[#bb4f02] text-white text-lg font-semibold rounded-full shadow-lg transition"
                >
                    ⬅ Go Back Home
                </Link>
            </motion.div>

            {/* Footer small note */}
            <p className="mt-10 text-sm opacity-50 text-center">
                Error Code: <span className="font-bold">404</span>
            </p>
        </div>
    );
};

export default ErrorPage;
