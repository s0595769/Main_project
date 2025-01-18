import React from "react";

function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Filtr Kommunikation</h1>
        <ul className="flex space-x-6 text-gray-600">
          <li><a href="#" className="hover:text-gray-800">Home</a></li>
          <li><a href="#" className="hover:text-gray-800">Projects</a></li>
          <li><a href="#" className="hover:text-gray-800">Albums</a></li>
          <li><a href="#" className="hover:text-gray-800">Music</a></li>
          {/* Add more items as necessary */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
