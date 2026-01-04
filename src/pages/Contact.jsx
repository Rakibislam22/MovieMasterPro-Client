import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthContext";

const Contact = () => {
    const { theme } = useContext(AuthContext);

    return (
        <div className={`max-w-4xl mx-auto my-20 p-6 rounded-2xl shadow-lg
      ${theme === "dark" ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"}
    `}>
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

            <p className="mb-8">
                Have questions, suggestions, or feedback? We'd love to hear from you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-3">📧 Email</h3>
                    <p>support@moviemaster.app</p>

                    <h3 className="text-xl font-semibold mt-6 mb-3">📍 Location</h3>
                    <p>Dhaka, Bangladesh</p>
                </div>

                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-2 rounded-xl border focus:outline-none"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-2 rounded-xl border focus:outline-none"
                    />
                    <textarea
                        rows="4"
                        placeholder="Your Message"
                        className="w-full px-4 py-2 rounded-xl border focus:outline-none"
                    />
                    <button
                        type="button"
                        className="bg-[#f97316] hover:bg-[#bb4f02] text-white px-6 py-2 rounded-full"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
