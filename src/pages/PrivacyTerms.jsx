import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthContext";

const PrivacyTerms = () => {
    const { theme } = useContext(AuthContext);

    return (
        <div
            className={`max-w-5xl mx-auto my-20 p-6 rounded-2xl shadow-lg
            ${theme === "dark" ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"}
        `}
        >
            <h1 className="text-4xl font-bold mb-6">Privacy Policy & Terms</h1>

            {/* Privacy Policy */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-3">🔒 Privacy Policy</h2>
                <p className="mb-4">
                    At MovieMaster, we value and respect your privacy. This Privacy Policy explains
                    how we collect, use, and protect your personal information when you use our
                    platform.
                </p>
                <p className="mb-4">
                    We may collect basic information such as your name, email address, and account
                    activity to provide core features like authentication, watchlists, and personal
                    movie collections. This information is used solely to improve your experience
                    and ensure the platform functions smoothly.
                </p>
                <p>
                    MovieMaster does not sell, rent, or trade your personal data with third parties.
                    We implement reasonable security measures to protect your information from
                    unauthorized access, misuse, or disclosure.
                </p>
            </section>

            {/* Terms of Service */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-3">📜 Terms of Service</h2>
                <p className="mb-4">
                    By accessing or using MovieMaster, you agree to comply with these Terms of
                    Service. If you do not agree with any part of these terms, you should discontinue
                    using the platform.
                </p>
                <p className="mb-4">
                    Users are responsible for maintaining the confidentiality of their accounts and
                    for all activities that occur under their accounts. Any form of misuse,
                    including unauthorized access, spamming, or attempting to disrupt the service,
                    is strictly prohibited.
                </p>
                <p>
                    MovieMaster reserves the right to suspend or terminate accounts that violate
                    these terms, engage in illegal activities, or harm the platform or other users.
                </p>
            </section>

            {/* Content Disclaimer */}
            <section>
                <h2 className="text-2xl font-semibold mb-3">⚠️ Content Disclaimer</h2>
                <p className="mb-4">
                    MovieMaster provides movie-related information, including titles, descriptions,
                    images, and ratings, for informational and educational purposes only.
                </p>
                <p className="mb-4">
                    While we strive to keep all information accurate and up to date, we do not
                    guarantee the completeness, reliability, or accuracy of the content displayed
                    on the platform.
                </p>
                <p>
                    All movie posters, images, trademarks, and copyrighted materials belong to
                    their respective owners. MovieMaster does not claim ownership of third-party
                    content and uses such materials under fair use principles.
                </p>
            </section>
        </div>
    );
};

export default PrivacyTerms;
