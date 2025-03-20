import { useState, useRef } from "react";
import Image from "next/image";

interface Service {
  name: string;
  image: string;
}

const ServicesCarousel: React.FC = () => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const allServices: Service[] = [
    { name: "Hair Services", image: "/images/hair.jpg" },  
    { name: "Nail Services", image: "/images/nail.jpg" },
    { name: "Skincare", image: "/images/skin.jpg" },
    { name: "Waxing and Hair Removal", image: "/images/wax.jpg" },
    { name: "Makeup Services", image: "/images/makeup.jpg" },
    { name: "Spa Services", image: "/images/spa.jpg" },
    { name: "Head Massage", image: "/images/headmassage.jpg" },
    { name: "Hair Styling", image: "/images/hairstyling.jpg" },
    { name: "Perms and Relaxers", image: "/images/perms.jpeg" },
    { name: "Body Wrap", image: "/images/bodywarp.jpeg" },
    { name: "Hair Extensions", image: "/images/hairextension.jpeg" },
    { name: "Other", image: "/images/others.jpeg" },
  ];

  const servicesToShow = allServices.slice(0, 6);

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold my-6">What are you looking for?</h2>
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-orange-500 font-medium flex items-center"
        >
          {showAll ? "Show Less" : "Explore All →"}
        </button>
      </div>

      {/* Carousel View */}
      {!showAll && (
        <div
          ref={carouselRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide mt-6 justify-between items-center max-w-8xl"
          style={{ scrollBehavior: "smooth" }}
        >
          {servicesToShow.map((service, index) => (
            <div key={index} className="flex flex-col items-center min-w-[200px]">
              <div className="w-20 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-lg">
                <Image
                  src={service.image}
                  alt={service.name}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="mt-2 text-center text-sm sm:text-md font-medium my-10">{service.name}</p>
            </div>
          ))}
        </div>
      )}

      {/* Full Grid View */}
      {showAll && (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 mt-6">
          {allServices.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-lg">
                <Image
                  src={service.image}
                  alt={service.name}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="mt-2 text-center text-sm sm:text-md font-medium my-12">{service.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServicesCarousel;
