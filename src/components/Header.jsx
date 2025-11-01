import React from "react";
import logo1 from "../assets/logo1.png";

const Header = () => {
  return (
    <header className="w-full text-center pt-16 sm:pt-12 md:pt-10 pb-4 relative">
      <img
        src={logo1}
        alt="Team O•S Logo"
        className="absolute top-5 left-4 sm:left-6 w-10 sm:w-12 md:w-14 h-auto object-contain"
      />
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-cyan-400 tracking-wider mt-4 sm:mt-2">
        HOUR OF CODE 4.0
      </h1>
    </header>
  );
};

export default Header;
