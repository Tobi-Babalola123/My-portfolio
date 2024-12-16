import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faPinterest,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const Work = () => {
  return (
    <div>
      {" "}
      <header
        className="text-white bg-cover bg-center relative"
        style={{ backgroundImage: "url('/Assets/skyline9.webp')" }}
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

            {/* Center-aligned Navigation Links and Social Media */}
            <div className="flex-1 flex justify-center items-center space-x-8">
              {/* Navigation Links */}
              <Navbar />
              {/* Social Media Icons */}
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center py-40 px-6 bg-opacity-75 backdrop-filter backdrop-brightness-80 mt-16"></div>
      </header>
      <section className="py-12 bg-gray-50">
        {/* Heading */}
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-teal-500 mb-2">WORK</h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto mb-8"></div>
        </div>

        {/* Work Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Work Item */}
            <div className="relative group">
              <img
                src="/Assets/solaris-surge.png" // Replace with your image URL
                alt="Foxy Bingo"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <h3 className="text-white text-lg font-bold">
                  SOLARIS SURGE ENERGY SOLUTIONS
                </h3>
                <button className="mt-4 px-4 py-2 text-sm font-semibold text-white bg-teal-500 rounded hover:bg-teal-700">
                  <Link to="https://solarisurge.netlify.app/">
                    Learn More
                  </Link>
                </button>
              </div>
            </div>

            {/* Work Item */}
            <div className="relative group">
              <img
                src="/Assets/health-app.png" // Replace with your image URL
                alt="Netlist"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <h3 className="text-white text-lg font-bold">
                  HEALTH MONITORING APP
                </h3>
                <button className="mt-4 px-4 py-2 text-sm font-semibold text-white bg-teal-500 rounded hover:bg-teal-700">
                  <Link to="https://health-monitoring-app-react.netlify.app/">
                    Learn More
                  </Link>
                </button>
              </div>
            </div>

            {/* Work Item */}
            <div className="relative group">
              <img
                src="/Assets/trendtrovy.png" // Replace with your image URL
                alt="Third Point RE"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <h3 className="text-white text-lg font-bold">TRENDTROVE</h3>
                <button className="mt-4 px-4 py-2 text-sm font-semibold text-white bg-teal-500 rounded hover:bg-teal-700">
                  <Link to="https://gleeful-alpaca-51d8ad.netlify.app/">
                    {" "}
                    Learn More
                  </Link>
                </button>
              </div>
            </div>

            {/* Work Item */}
            <div className="relative group">
              <img
                src="/Assets/travelsphere.png" // Replace with your image URL
                alt="Kobo"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <h3 className="text-white text-lg font-bold">TRAVELSPHERE</h3>
                <button className="mt-4 px-4 py-2 text-sm font-semibold text-white bg-teal-500 rounded hover:bg-teal-700">
                  <Link> Learn More</Link>
                </button>
              </div>
            </div>

            {/* Work Item */}
            <div className="relative group">
              <img
                src="/Assets/pizza2.png" // Replace with your image URL
                alt="Environmental Defense"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <h3 className="text-white text-lg font-bold">PIZZA APP</h3>
                <button className="mt-4 px-4 py-2 text-sm font-semibold text-white bg-teal-500 rounded hover:bg-teal-700">
                  Learn More
                </button>
              </div>
            </div>

            {/* Work Item */}
            <div className="relative group">
              <img
                src="/Assets/book-covers.jpg" // Replace with your image URL
                alt="Book Covers"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <h3 className="text-white text-lg font-bold">Book Covers</h3>
                <button className="mt-4 px-4 py-2 text-sm font-semibold text-white bg-teal-500 rounded hover:bg-teal-700">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
