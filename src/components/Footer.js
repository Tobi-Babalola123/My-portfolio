import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between items-end px-6 pb-4">
      {/* Copyright Section */}
      <p className="text-sm text-gray-500 ml-20">
        © Copyright{" "}
        <span className="italic font-cursive font-bold">Tobi Babalola</span>{" "}
        2024
      </p>

      {/* Icon Section */}
      <img
        src="/Assets/web3.png" // Replace this with the bird icon path
        alt="Bird Icon"
        className="w-20 h-20"
      />
    </div>
  );
};

export default Footer;
