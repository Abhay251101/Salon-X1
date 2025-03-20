import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import { topRatedSalons } from "./salons";

const TopRatedSalons: React.FC = () => {
  const salonRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (salonRef.current) {
      salonRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (salonRef.current) {
      salonRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="mt-12">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Top Rated Salons</h2>
        <div className="flex space-x-4">
          <button className="p-2 bg-gray-200 rounded-full" onClick={scrollLeft}>
            <FaArrowLeft />
          </button>
          <button className="p-2 bg-gray-200 rounded-full" onClick={scrollRight}>
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div ref={salonRef} className="flex space-x-10 overflow-hidden mt-6">
        {topRatedSalons.map((salon, index) => (
          <Link key={index} href={`/${encodeURIComponent(salon.name)}`} passHref>
            <div className="min-w-[250px] p-4 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition">
              <div className="relative">
                <Image 
                  src={salon.image} 
                  alt={salon.name} 
                  width={300} 
                  height={200} 
                  className="rounded-lg object-cover w-full h-[200px]" 
                />
                <span className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-xs rounded">
                  {salon.type}
                </span>
                <span className="absolute bottom-2 right-2 bg-black text-white px-2 py-1 text-xs flex items-center">
                  <FaStar className="mr-1 text-yellow-400" /> {salon.rating}
                </span>
              </div>
              <h3 className="font-semibold mt-2">{salon.name}</h3>
              <p className="text-sm text-gray-500">{salon.location}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopRatedSalons;
