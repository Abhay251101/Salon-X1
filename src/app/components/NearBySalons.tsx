import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaStar, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { salons } from "./salons"; // Correct import

const NearBySalons: React.FC = () => {
  const [visibleSalons, setVisibleSalons] = useState(9); // Show 9 salons initially
  const minVisibleSalons = 9; // Minimum number of salons to display

  const loadMoreSalons = () => {
    setVisibleSalons((prev) => prev + 6); // Load 6 more salons each time
  };

  const showLessSalons = () => {
    setVisibleSalons((prev) => Math.max(minVisibleSalons, prev - 6)); // Reduce by 6, but not below 9
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold mb-6">Near by your area</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
        {salons.slice(0, visibleSalons).map((salon, index) => (
          <Link href={`/${encodeURIComponent(salon.name)}`} key={index} className="p-4 bg-white rounded-lg shadow-md block">
            <div className="relative">
              <Image
                src={salon.image}
                alt={salon.name}
                width={220}
                height={200}
                className="rounded-lg object-cover w-full h-[300px]"
              />
              <span
                className={`absolute top-2 left-2 px-2 py-1 text-xs rounded text-white ${
                  salon.type === "Male"
                    ? "bg-blue-500"
                    : salon.type === "Female"
                    ? "bg-pink-500"
                    : "bg-purple-500"
                }`}
              >
                {salon.type}
              </span>
              <span className="absolute bottom-2 right-2 bg-black text-white px-2 py-1 text-xs flex items-center">
                <FaStar className="mr-1 text-yellow-400" /> {salon.rating}
              </span>
            </div>
            <h3 className="font-semibold mt-2">{salon.name}</h3>
            <p className="text-sm text-gray-500 flex items-center">
              <FaMapMarkerAlt className="mr-1 text-gray-400" /> {salon.location}
            </p>
            <p className="text-sm text-gray-500 flex items-center">
              <FaClock className="mr-1 text-gray-400" /> {salon.hours}
            </p>
            <p className="text-sm text-gray-600">{salon.distance}</p>
          </Link>
        ))}
      </div>

      {/* Show buttons only if needed */}
      <div className="text-center mt-6">
        {visibleSalons < salons.length && (
          <button
            onClick={loadMoreSalons}
            className="mt-4 px-6 py-2 bg-black text-white rounded-full font-medium shadow-md hover:bg-orange-600 transition duration-300 mx-2"
          >
            View More
          </button>
        )}

        {visibleSalons > minVisibleSalons && (
          <button
            onClick={showLessSalons}
            className="mt-4 px-6 py-2 bg-gray-300 text-black rounded-full font-medium shadow-md hover:bg-red-500 hover:text-white transition duration-300 mx-2"
          >
            View Less
          </button>
        )}
      </div>
    </div>
  );
};

export default NearBySalons;
