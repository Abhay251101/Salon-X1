"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { FaStar, FaArrowLeft, FaArrowRight, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { ChevronDown, ChevronUp } from "lucide-react";
import FAQSection from "./FAQSection";
import TopRatedSalons from "./TopRatedSalons";
import NearBySalons from "./NearBySalons";
import ServicesCarousel from "./ServicesCarousel";
import RecommendedSalons from "./RecommendedSalons";
import ContactForm from "./ContactForm";
import SocialNewsletterMap from "./SocialNewsletterMap";
import Footer from "./Footer";
import Navbar from "./Navbar";
import PartnerCards from "./PartnerCards";




const ServicesSection = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div>
      <Navbar/>
    <section className="bg-[#F3F3F3] py-12 px-10">

        {/* Header */}
        <ServicesCarousel/>
        

      {/* 50% Off Banner */}
      <div className="relative mt-8 flex justify-center">
        <Image 
          src="/images/bg2.png" 
          alt="50% Off Discount Banner" 
          width={1523} 
          height={520} 
          className="rounded-lg shadow-lg w-full h-[520px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none"></div>

        <div className="absolute left-20 top-48 text-white">
          <h2 className="text-4xl font-bold">Get upto </h2>
          <h3 className="text-white text-6xl max-w-42 m-5 ml-0 font-bold">50% OFF</h3>
          <p className="text-lg font-semibold">Here is a difference between a beauty salon</p>
          <p className="text-lg font-semibold">and a hair salon.</p>
        </div>
      </div>

      {/* Top Rated Salons */}
      <TopRatedSalons/>

         {/* Nearby Your Area Section */}
         <NearBySalons />


       {/* Promo Codes Section */}
       <div className="mt-12">
          <h2 className="text-2xl font-semibold">Promo Codes For More Savings</h2>
          <div className="flex space-x-6 overflow-x-auto scrollbar-hide mt-6">
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-6 rounded-lg shadow-lg text-white min-w-[250px]">
              <h3 className="text-lg font-bold">Get 30% OFF</h3>
              <p>Get discount on all the Skin care service</p>
              <p className="mt-2 bg-white text-black px-2 py-1 rounded font-bold">Code: SKIN30OFF</p>
              <p className="mt-2 text-xs">Expires on: 20 Aug, 2022</p>
              <button className="mt-4 bg-white text-black px-4 py-2 rounded-lg font-semibold">Know More</button>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 rounded-lg shadow-lg text-white min-w-[250px]">
              <h3 className="text-lg font-bold">Flat 50% OFF</h3>
              <p>Get discount on all the Skin care service</p>
              <p className="mt-2 bg-white text-black px-2 py-1 rounded font-bold">Code: SKIN30OFF</p>
              <p className="mt-2 text-xs">Expires on: 20 Aug, 2022</p>
              <button className="mt-4 bg-white text-black px-4 py-2 rounded-lg font-semibold">Know More</button>
            </div>
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-lg shadow-lg text-white min-w-[250px]">
              <h3 className="text-lg font-bold">Flat Discount $49</h3>
              <p>Get discount on all the Skin care service</p>
              <p className="mt-2 bg-white text-black px-2 py-1 rounded font-bold">Code: SKIN30OFF</p>
              <p className="mt-2 text-xs">Expires on: 20 Aug, 2022</p>
              <button className="mt-4 bg-white text-black px-4 py-2 rounded-lg font-semibold">Know More</button>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6 rounded-lg shadow-lg text-white min-w-[250px]">
              <h3 className="text-lg font-bold">Get 80% OFF</h3>
              <p>Get discount on all the Skin care service</p>
              <p className="mt-2 bg-white text-black px-2 py-1 rounded font-bold">Code: SKIN30OFF</p>
              <p className="mt-2 text-xs">Expires on: 20 Aug, 2022</p>
              <button className="mt-4 bg-white text-black px-4 py-2 rounded-lg font-semibold">Know More</button>
            </div>
          </div>
        </div>


     {/* Recommended Salons */}
      <RecommendedSalons/>

      {/* two divs section  */}
     <PartnerCards/>
      
      {/* FAQsection */}
    <FAQSection />

    {/* Contact Form */}
    <ContactForm/>

    {/* SocialNewsletterMap */}
    <SocialNewsletterMap/>

    {/* Footer */}
    <Footer/>
    </section>
    </div>
  );
};

export default ServicesSection;
