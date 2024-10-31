import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Logo from "../../assets/react.png";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center w-full px-10 py-4 bg-gray-100">
      <div className="flex items-center gap-3">
        <img src={Logo} alt="Logo" className="w-16 h-16 ml-0" />
        <h1 className="text-lg font-bold text-blue-500">GENgo AI BOT</h1>
      </div>
      <div className="flex gap-8 text-lg font-medium">
        <Link to="/about" className="text-gray-700 hover:text-blue-500">
          About {/* Wrap "About" text with Link */}
        </Link>
      </div>
    </div>
  );
};

export default NavBar;