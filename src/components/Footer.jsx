import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <motion.footer
      className="bg-black text-gray-300 py-12 px-6 md:px-12 border-t border-gray-800"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-2xl font-bold text-white">
              Movie<span className="text-[#f97316]">Master</span> Pro
            </h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your ultimate movie management platform. Browse, manage, and
            organize your favorite films with ease and style.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/"
                className="hover:text-[#f97316] transition duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="#top-rated"
                className="hover:text-[#f97316] transition duration-200"
              >
                Top Rated
              </a>
            </li>
            <li>
              <a
                href="#recent"
                className="hover:text-[#f97316] transition duration-200"
              >
                Recently Added
              </a>
            </li>
            <li>
              <a
                href="#genres"
                className="hover:text-[#f97316] transition duration-200"
              >
                Genres
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-[#f97316] transition duration-200"
              >
                About
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="#contact"
                className="hover:text-[#f97316] transition duration-200"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="#support"
                className="hover:text-[#f97316] transition duration-200"
              >
                Support
              </Link>
            </li>
            <li>
              <Link
                to="#privacy"
                className="hover:text-[#f97316] transition duration-200"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="#terms"
                className="hover:text-[#f97316] transition duration-200"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Follow Us
          </h3>
          <div className="flex gap-4 text-gray-400">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#f97316] transition"
            >
              <FaFacebook className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#f97316] transition"
            >
              <FaXTwitter className="w-5 h-5" /> 
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#f97316] transition"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#f97316] transition"
            >
              <FaYoutube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} Movie<span className="text-[#f97316]">Master</span> Pro. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
