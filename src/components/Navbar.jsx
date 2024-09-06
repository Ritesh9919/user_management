import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <Link to="/" className="text-white text-lg">
            User Management
          </Link>
          <Link to="/create" className="text-white">
            Create User
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
