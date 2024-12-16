import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header
        className="text-white bg-cover bg-center relative"
        style={{ backgroundImage: "url('/Assets/skyline7.webp')" }}
      >
        {/* Fixed Navigation Bar */}
        <div className="fixed top-0 left-0 w-full bg-white bg-opacity-90 shadow-md z-50">
          <div className="container mx-auto flex justify-between items-center py-4 px-6">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src="/Assets/logo.png" alt="Logo" className="w-8 h-8" />
              <h1 className="text-2xl font-cursive text-black font-bold">
                Tobi Babalola
              </h1>
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="block lg:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-black focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {menuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-1 justify-center items-center space-x-8">
              <Navbar />
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {menuOpen && (
            <div className="lg:hidden bg-white shadow-md">
              {/* Navigation Links */}
              <ul className="space-y-4 py-4 text-center">
                <li>
                  <Link
                    to="/"
                    className="block text-black hover:text-gray-500 font-bold"
                    onClick={() => setMenuOpen(false)}
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="block text-black hover:text-gray-500 font-bold"
                    onClick={() => setMenuOpen(false)}
                  >
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link
                    to="/work"
                    className="block text-black hover:text-gray-500 font-bold"
                    onClick={() => setMenuOpen(false)}
                  >
                    WORK
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="block text-black hover:text-gray-500 font-bold"
                    onClick={() => setMenuOpen(false)}
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>

              {/* Social Media Icons */}
              <div className="flex justify-center space-x-4 pb-4">
                <Link
                  to="https://x.com/babalola_t4714"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-500"
                >
                  <img
                    src="/Assets/twitter2.png"
                    alt="Twitter"
                    className="w-6 h-6"
                  />
                </Link>
                <Link
                  to="https://www.pinterest.com/Pinnacle20244/my-designs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-500"
                >
                  <img
                    src="/Assets/pinterest.png"
                    alt="Pinterest"
                    className="w-6 h-6"
                  />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/tobi-babalola"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-500"
                >
                  <img
                    src="/Assets/linkedin2.png"
                    alt="LinkedIn"
                    className="w-6 h-6"
                  />
                </Link>
                <Link
                  to="https://dribbble.com/Tbabalola2024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-500"
                >
                  <img
                    src="/Assets/dribble.png"
                    alt="Dribbble"
                    className="w-6 h-6"
                  />
                </Link>
                <Link
                  to="https://www.behance.net/babalolasamuel3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-500"
                >
                  <img
                    src="/Assets/behance.png"
                    alt="Behance"
                    className="w-6 h-6"
                  />
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Hero Section */}
        <div className="text-center py-40 px-6 bg-opacity-75 backdrop-filter backdrop-brightness-50 mt-16">
          {/* Content (optional) */}
        </div>
      </header>

      {/* Contact Section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-green-00">CONTACT</h2>
          <div className="mt-2">
            <div className="inline-block w-12 h-1 bg-gray-400"></div>
          </div>
          <p className="mt-6 text-gray-700 text-lg">
            Want to get in touch? If saying my name three times doesn’t work,
            you could also use these tried and true methods:
          </p>
        </div>
        <div className="mt-10 flex justify-center flex-wrap gap-8">
          {/* LinkedIn */}
          <Link
            to="https://www.linkedin.com/in/tobi-babalola"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center hover:text-gray-600"
          >
            <img
              src="/Assets/linkedin.png"
              alt="LinkedIn"
              className="h-16 w-16"
            />
            <span className="mt-4 text-gray-800 font-medium">LinkedIn</span>
          </Link>

          {/* Email */}
          <a
            href="mailto:babsamuel2196@gmail.com"
            className="flex flex-col items-center text-center hover:text-gray-600"
          >
            <img src="/Assets/mail.png" alt="Email" className="h-16 w-16" />
            <span className="mt-4 text-gray-800 font-medium">Email</span>
          </a>

          {/* Twitter */}
          <Link
            to="https://x.com/babalola_t4714"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center hover:text-gray-600"
          >
            <img
              src="/Assets/twitter.png"
              alt="Twitter"
              className="h-16 w-16"
            />
            <span className="mt-4 text-gray-800 font-medium">Twitter</span>
          </Link>

          {/* Instagram */}
          <Link
            to="https://www.instagram.com/pointone.designs?igsh=NTc4MTIwNjQ2YQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center hover:text-gray-600"
          >
            <img
              src="/Assets/instagram.png"
              alt="Instagram"
              className="h-16 w-16"
            />
            <span className="mt-4 text-gray-800 font-medium">Instagram</span>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
