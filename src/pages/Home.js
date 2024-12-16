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
// Import Framer Motion
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      <header
        className="text-white bg-cover bg-center relative"
        style={{ backgroundImage: "url('/Assets/skyline.webp')" }}
      >
        {/* Fixed Navigation Bar */}
        <div className="fixed top-0 left-0 w-full bg-white bg-opacity-20 shadow-md z-50">
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
        <motion.div
          className="text-center py-40 px-6 bg-opacity-75 backdrop-filter backdrop-brightness-50 mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl font-cursive font-bold mb-4">
            Tobi Babalola
          </h1>
          <p className="text-lg">GRAPHIC & WEB DESIGNER</p>
        </motion.div>
      </header>

      <section className="bg-gray-50 py-12 relative">
        {/* Decorative Bird Images */}
        <div
          className="absolute hidden lg:block"
          style={{ top: "2.75rem", left: "17rem" }}
        >
          <img
            src="/Assets/graphic.png"
            alt="Decorative Bird"
            className="w-24 h-24"
          />
        </div>

        <div
          className="absolute hidden lg:block"
          style={{ bottom: "4rem", right: "2rem" }}
        >
          <img
            src="/Assets/responsive-design.png"
            alt="Decorative Bird"
            className="w-24 h-24"
          />
        </div>

        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <motion.h2
            className="text-3xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            A LITTLE BIT ABOUT ME
          </motion.h2>
          <div className="w-16 h-1 mx-auto bg-gray-300 rounded-full mb-8"></div>

          {/* Subtitle */}
          <motion.h3
            className="text-xl font-semibold text-gray-600 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            I am a Web Developer & Graphic Designer
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-gray-600 leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            I am a Frontend Developer & Graphic Designer with 3 years of
            experience, specializing in creating visually compelling and
            user-friendly websites. I’ve always nurtured my active imagination
            and deep curiosity, which, along with a strong sense of empathy,
            drive my creative process and help me build solutions that truly
            resonate with users. Problem-solving is at the heart of what I do,
            and I am passionate about turning ideas into beautiful, functional
            digital experiences.
          </motion.p>
          <motion.p
            className="text-gray-600 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            I began my career as a graphic designer and quickly discovered my
            talent for web development, particularly frontend design. I enjoy
            crafting intuitive site structures and navigation flows as much as I
            do designing stunning visuals, and my expertise in both areas allows
            me to bring a unique perspective to every project. Over the years,
            I’ve had the pleasure of working with brands like Solaris Surge
            Energy Solutions, Lampnet Solutions, RCCG, and Xtrarite Superstores
            adapting their brands to digital platforms with seamless designs
            that engage and inspire.
          </motion.p>
        </div>
      </section>

      <section
        style={{
          backgroundImage: "url('/Assets/blue.jpg')",
        }}
        className="relative bg-cover bg-center py-12"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <motion.h2
            className="text-white text-3xl font-bold mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            SKILLS
          </motion.h2>
          <div className="w-16 h-1 bg-white mx-auto mb-8"></div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Skill Item */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              <img
                src="/Assets/uxx.avif"
                alt="UX/UI Design"
                className="w-30 h-30 mb-4"
              />
              <p className="text-white text-lg font-semibold">UX/UI Design</p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              <img
                src="/Assets/art.avif"
                alt="Art Direction"
                className="w-30 h-30 mb-4"
              />
              <p className="text-white text-lg font-semibold">Art Direction</p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              <img
                src="/Assets/graphic.webp"
                alt="Graphic Design"
                className="w-30 h-30 mb-[-1rem]"
              />
              <p className="text-white text-lg font-semibold">Graphic Design</p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <img
                src="/Assets/web.webp"
                alt="Web Design"
                className="w-30 h-30 mb-4"
              />
              <p className="text-white text-lg font-semibold">Web Design</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        {/* Heading */}
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-gray-800 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            WORK
          </motion.h2>
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
                  <Link to="https://solarisurge.netlify.app/">Learn More</Link>
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
                src="/Assets/travelsphere.jpg" // Replace with your image URL
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

export default Home;
