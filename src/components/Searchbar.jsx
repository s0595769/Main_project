import React, { useState } from "react";
// import SearchIcon from "@mui/icons-material/Search";

// import { SvgIcon } from '@mui/material';
// import { styled } from "@mui/material/styles";

// import SearchIcon from '@mui/icons-material/Search';


function SearchBar() {
  // State to store the selected year
  const [selectedYear, setSelectedYear] = useState(null);

  // Years to display
  const years = [2015,2016,2017,2018,2019,2020, 2021, 2022, 2023, 2024];

  // Function to handle year click
  const handleYearClick = (year) => {
    setSelectedYear(year);
  };

  return (
    <div className="bg-stone-800 text-white rounded-lg p-6 text-center relative">
      <h2 className="text-3xl font-semibold mb-4">Magazine Name</h2>
      <div className="text-lg mb-4">
        {years.map((year) => (
          <a
            key={year}
            href="#"
            className={`hover:text-yellow-800 px-2 ${
              selectedYear === year ? "text-yellow-400 font-bold" : ""
            }`}
            onClick={(e) => {
              e.preventDefault(); 
              handleYearClick(year);
            }}
          >
            {year}
          </a>
        ))}
      </div>
      <div className="relative w-full max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-md text-gray-800 focus:outline-none"
        />
        <button
  type="button"
  className="absolute right-2 top-0.5 bg-gray-200 hover:bg-gray-300 rounded-full p-2 text-gray-800"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-4.35-4.35M11 4a7 7 0 110 14 7 7 0 010-14z"
    />
  </svg>
</button>

      </div>
    </div>
  );
}

export default SearchBar;
