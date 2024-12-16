import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faPinterest,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const AboutSection = () => {
  return (
    <div>
      <header
        className="text-white bg-cover bg-center relative"
        style={{ backgroundImage: "url('/Assets/skyline5.jpg')" }}
      >
        {/* Fixed Navigation Bar */}
        <Navbar />

        {/* Hero Section */}
        <div className="text-center py-40 px-6 bg-opacity-75 backdrop-filter backdrop-brightness-50 mt-16">
          {/* <h1 className="text-6xl font-cursive font-bold mb-4">
            Tobi Babalola
          </h1> */}
          {/* <p className="text-lg">GRAPHIC & WEB DESIGNER</p> */}
        </div>
      </header>
      <section className="py-16 px-8 bg-white text-center">
        {/* Section Title */}
        <div className="mb-6">
          <h2 className="text-teal-500 text-4xl font-bold">ABOUT</h2>
          <div className="w-12 mx-auto mt-2 border-t-2 border-teal-500"></div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">
          I am a highly curious web developer and graphic designer with a
          passion for frontend development and a constant drive to learn. I
          approach each project with a problem-solving mindset, always seeking
          innovative solutions that enhance user experiences and bring design to
          life. With a strong foundation in graphic design and web development,
          I’m always looking for new ways to integrate design with
          functionality. My goal is to create beautiful, user-friendly websites
          and digital experiences, blending aesthetic appeal with cutting-edge
          technology. I'm excited to continue growing my skills and using them
          to craft visually stunning and seamless web designs
        </p>

        {/* Specialties */}
        <div className="mb-8">
          <h3 className="text-teal-500 text-2xl font-semibold">Specialties</h3>
          <p className="text-gray-600 text-base mt-2">
            <p>
              Specializing in Frontend Development, Graphic Design, Web Design,
              <br />
              UX/UI Design, Branding, Creative Strategy, and Conceptual
              Thinking. <br /> Passionate about blending aesthetics with
              functionality to create visually <br /> compelling and
              user-friendly digital experiences.
            </p>
          </p>
        </div>

        {/* Download Resume Button */}
        <div>
          <a
            href="/Assets/Tobi's_Resume.pdf"
            download="My_Resume"
            className="text-teal-500 border-2 border-teal-500 px-6 py-3 rounded-full hover:bg-teal-500 hover:text-white transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutSection;
