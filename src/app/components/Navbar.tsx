"use client";

import { useState } from "react";
import { ShoppingCart, User, Search, MapPin } from "lucide-react";
import "../styles/global.css";

const majorCities = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
  "Chandigarh",
  "Bhopal",
  "Indore",
  "Coimbatore",
  "Thiruvananthapuram",
];

const Navbar = () => {
  const [city, setCity] = useState("Bangalore");

  return (
    <nav className="flex items-center justify-between bg-white p-4 shadow-md">
      {/* Logo */}
      <img src="images/logo.png" alt="Logo" />

      {/* City Selector */}
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
        <select
          className="border p-2 pl-10 rounded-3xl border-gray-500 w-48"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          {majorCities.map((cityName, index) => (
            <option key={index} value={cityName}>
              {cityName}
            </option>
          ))}
        </select>
      </div>

      {/* Search Bar */}
      <div className="flex items-center border p-2 rounded-3xl border-gray-500 w-1/2">
        <Search className="w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="ml-2 outline-none w-full"
        />
      </div>

      {/* Icons */}
      <div className="flex items-center gap-4">
        <ShoppingCart className="w-6 h-6 cursor-pointer" />
        <button className="bg-white text-black px-4 py-2 rounded-md">
          Sign In
        </button>
        <User className="w-6 h-6 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
