import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-white bg-opacity-90 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/Assets/logo.png" alt="Logo" className="w-8 h-8" />
          <h1 className="text-2xl font-cursive text-black font-bold">
            Tobi Babalola
          </h1>
        </div>

        {/* Hamburger Menu Button (Mobile Only) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden lg:flex items-center space-x-8">
          <nav className="flex space-x-6 font-bold">
            <Link to="/" className="text-black hover:text-gray-500">
              HOME
            </Link>
            <Link to="/about" className="text-black hover:text-gray-500">
              ABOUT
            </Link>
            <Link to="/work" className="text-black hover:text-gray-500">
              WORK
            </Link>
            <Link to="/contact" className="text-black hover:text-gray-500">
              CONTACT
            </Link>
          </nav>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white lg:hidden">
            <nav className="flex flex-col items-center space-y-4 py-4">
              <Link
                to="/"
                className="text-black hover:text-gray-500"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                to="/about"
                className="text-black hover:text-gray-500"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                to="/work"
                className="text-black hover:text-gray-500"
                onClick={() => setIsMenuOpen(false)}
              >
                WORK
              </Link>
              <Link
                to="/contact"
                className="text-black hover:text-gray-500"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>

              {/* Social Media Icons */}
              <div className="flex space-x-4">
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
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
