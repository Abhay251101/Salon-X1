"use client";  

import Image from "next/image";
import { useParams, notFound } from "next/navigation";
import { FaStar, FaMapMarkerAlt, FaClock, FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import { salons, topRatedSalons,recommendedSalons } from "../components/salons";
import Navbar from "../components/Navbar";
import Reviews from "../components/Reviews";
import PartnerCards from "../components/PartnerCards";
import SocialNewsletterMap from "../components/SocialNewsletterMap";
import Footer from "../components/Footer";
import { useRouter } from "next/navigation"; 

const SalonDetail = () => {
  const params = useParams(); 
  const router = useRouter();
  const [salon, setSalon] = useState<any>(null);
  const [cart, setCart] = useState<any[]>([]);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const handleCheckout = () => {
    if (cart.length === 0) return;
    const queryParams = cart
    .map((item, index) => `service${index}=${encodeURIComponent(item.service)}&price${index}=${item.price}`)
    .join("&");

  // Navigate to book-appointment page with cart data
  router.push(`/book-appointment?${queryParams}`);
};

  useEffect(() => {
    if (params?.salonName) {
      const decodedName = decodeURIComponent(params.salonName as string);
      const foundSalon = salons.find((s) => s.name === decodedName) ||
                         topRatedSalons.find((s) => s.name === decodedName) ||
                         recommendedSalons.find((s) => s.name === decodedName); // Include recommendedSalons
  
      if (!foundSalon) {
        notFound();
      } else {
        setSalon(foundSalon);
      }
    }
  }, [params]);
  

  if (!salon) return <p>Loading...</p>;

  const addToCart = (service: string, price: number) => {
    setCart([...cart, { service, price }]);
  };

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const applyPromoCode = () => {
    setDiscount(promoCode === "DISCOUNT10" ? 10 : 0);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  const discountedPrice = totalPrice - (totalPrice * discount) / 100;

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto ml-28 p-6 grid grid-cols-1 md:grid-cols-3 gap-10">  
        {/* Left Section */}
        <div className="md:col-span-2">
          <div className="relative right-4 top-4 mb-10 w-[700px] h-[450px] mx-auto">
            <Image src={salon.image} alt={salon.name} fill className="rounded-lg object-cover" />
          </div>
          <h1 className="text-3xl font-bold mt-4">{salon.name}</h1>
          <p className="text-lg text-gray-600 mt-2">A salon specializing in professional beauty and grooming services.</p>
          <p className="text-lg flex items-center mt-2"><FaMapMarkerAlt className="mr-2 text-gray-500" /> {salon.location}</p>
          <p className="text-lg flex items-center"><FaClock className="mr-2 text-gray-500" /> {salon.hours}</p>
          <p className="text-lg flex items-center"><FaStar className="mr-2 text-yellow-500" /> {salon.rating}</p>

          {/* Services List */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold">Services</h2>
            <div className="mt-4 space-y-4">
              {[
                { name: "Haircut", price: 28 },
                { name: "Hair Color", price: 28 },
                { name: "Hair Styling", price: 35 },
                { name: "Manicure", price: 28 },
                { name: "Pedicure", price: 28 },
                { name: "Facial", price: 28 },
                { name: "Massage", price: 30 }
              ].map((service, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md">
                  <div>
                    <p className="text-lg font-medium">{service.name}</p>
                    <p className="text-sm text-gray-500">30 - 45 min</p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold mr-4">${service.price.toFixed(2)}</p>
                    <button onClick={() => addToCart(service.name, service.price)} className="px-4 py-2 bg-black text-white rounded-lg">
                      ADD
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section: Business Hours, Cart & Promo */}
        <div className="space-y-6 mb-[10px] w-[480px] mt-4">
          {/* Business Hours */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Business hours</h3>
            <p className="text-gray-500">Monday - Sunday: {salon.hours}</p>
            <div className="mt-4">
              <p className="text-gray-500 text-sm">Location:</p>
              <p className="text-lg font-medium">{salon.location}</p>
            </div>
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24183.22514183018!2d-74.0060156!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316df34b6d%3A0xe08ef6dfb6e6a5c7!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1646644732198!5m2!1sen!2sus"
                width="450px"
                height="300"
                style={{ border: 0, borderRadius: "8px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Cart Section */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Your Cart</h3>
            {cart.length === 0 ? (
              <p className="text-gray-500 mt-2">Your cart is currently empty.</p>
            ) : (
              <div className="mt-2 space-y-2">
                {cart.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <p className="text-lg">{item.service}</p>
                    <div className="flex items-center">
                      <p className="text-lg font-medium mr-4">${item.price.toFixed(2)}</p>
                      <button onClick={() => removeFromCart(index)} className="text-red-500 hover:text-red-700">
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                ))}
                <hr className="my-2" />
                <div className="flex justify-between font-semibold text-lg">
                  <p>Total:</p>
                  <p>${totalPrice.toFixed(2)}</p>
                </div>
                {discount > 0 && <p className="text-green-600 mt-2">Promo Applied! {discount}% off</p>}
              </div>
            )}
            {cart.length > 0 && (
  <button onClick={handleCheckout} className="mt-4 w-full bg-green-600 text-white p-2 rounded-lg">
  Checkout
</button>
)}


             {/* Promo Code Section */}
             
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Promo Code</h3>
            <input 
              type="text" 
              value={promoCode} 
              onChange={(e) => setPromoCode(e.target.value)} 
              className="w-full p-2 border rounded mt-2" 
              placeholder="Enter promo code"
            />
            <button onClick={applyPromoCode} className="mt-2 w-full bg-black text-white p-2 rounded">
              Apply
            </button>
            {discount > 0 && <p className="text-green-600 mt-2">Promo Applied! {discount}% off</p>}
          </div>
          </div>
        </div>
      </div>
      <Reviews/>
      <PartnerCards/>
      <div className="mt-14 mb-14">
      <SocialNewsletterMap/>
      </div>
      <Footer/>
    </div>
  );
};

export default SalonDetail;
