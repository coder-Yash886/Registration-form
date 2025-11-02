
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full text-center py-4 text-sm sm:text-base text-gray-300 mt-8">
      © {new Date().getFullYear()} Team OSS 
    </footer>
  );
};

export default Footer;
