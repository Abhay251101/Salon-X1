"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic"; // To prevent SSR issues
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";

// Dynamically import Leaflet components to avoid SSR issues
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { 
  ssr: false, 
  loading: () => <p>Loading map...</p> 
});
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

const AppointmentConfirmation = () => {
  const searchParams = useSearchParams();
  const date = searchParams.get("date");
  const time = searchParams.get("time");

  const [location, setLocation] = useState("my_place");
  const [showMap, setShowMap] = useState(false);
  const [coordinates, setCoordinates] = useState<LatLngExpression>([37.7749, -122.4194]); // Default to SF
  const [address, setAddress] = useState({
    address: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  useEffect(() => {
    if (
      location === "my_place" &&
      address.address &&
      address.city &&
      address.state &&
      address.country
    ) {
      fetchCoordinates();
    }
  }, [address, location]);

  const fetchCoordinates = async () => {
    const fullAddress = `${address.address}, ${address.city}, ${address.state}, ${address.country}`;
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(fullAddress)}`
      );
      const data = await response.json();
      if (data.length > 0) {
        setCoordinates([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
        setShowMap(true);
      } else {
        console.error("No coordinates found for this address");
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-[1000px] mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-6">Where do you need service?</h2>

      <div className="flex gap-8">
        {/* Left Side: Location Selection */}
        <div className="w-1/2 p-8 border rounded-lg">
          <label
            className={`flex items-start p-6 border rounded-lg mb-6 cursor-pointer ${
              location === "my_place" ? "border-black" : "border-gray-300"
            }`}
          >
            <input
              type="radio"
              name="location"
              value="my_place"
              checked={location === "my_place"}
              onChange={() => {
                setLocation("my_place");
                setShowMap(false);
              }}
              className="mr-4 mt-1"
            />
            <div>
              <strong className="text-xl">At my place</strong>
              <p className="text-md text-gray-600">
                My clients come to me. I own the place or work in a salon/suite alongside other professionals.
              </p>
            </div>
          </label>

          <label
            className={`flex items-start p-6 border rounded-lg cursor-pointer ${
              location === "salon" ? "border-black" : "border-gray-300"
            }`}
          >
            <input
              type="radio"
              name="location"
              value="salon"
              checked={location === "salon"}
              onChange={() => {
                setLocation("salon");
                setShowMap(false);
              }}
              className="mr-4 mt-1"
            />
            <div>
              <strong className="text-xl">At Salon</strong>
              <p className="text-md text-gray-600">
                I'm on the go. My services are performed at the client's location.
              </p>
            </div>
          </label>
        </div>

        {/* Right Side: Address Form or Map */}
        <div className="w-1/2 p-8 border rounded-lg">
          <h3 className="text-xl font-medium mb-4">Enter your address</h3>

          {!showMap ? (
            <>
              <input
                type="text"
                placeholder="Address"
                value={address.address}
                onChange={(e) => setAddress({ ...address, address: e.target.value })}
                className="text-lg w-full border p-3 rounded mb-4"
              />
              <input
                type="text"
                placeholder="Street"
                value={address.street}
                onChange={(e) => setAddress({ ...address, street: e.target.value })}
                className="text-lg w-full border p-3 rounded mb-4"
              />
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="City"
                  value={address.city}
                  onChange={(e) => setAddress({ ...address, city: e.target.value })}
                  className="text-lg w-1/2 border p-3 rounded mb-4"
                />
                <input
                  type="text"
                  placeholder="State/Province"
                  value={address.state}
                  onChange={(e) => setAddress({ ...address, state: e.target.value })}
                  className="text-lg w-1/2 border p-3 rounded mb-4"
                />
              </div>
              <input
                type="text"
                placeholder="ZIP/Postal Code"
                value={address.zip}
                onChange={(e) => setAddress({ ...address, zip: e.target.value })}
                className="text-lg w-full border p-3 rounded mb-4"
              />
              <input
                type="text"
                placeholder="Country"
                value={address.country}
                onChange={(e) => setAddress({ ...address, country: e.target.value })}
                className="text-lg w-full border p-3 rounded mb-4"
              />
            </>
          ) : (
            <div className="h-60 w-full rounded-lg overflow-hidden">
              <MapContainer center={coordinates} zoom={14} style={{ height: "300px", width: "100%" }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={coordinates}>
                  <Popup>Your selected location</Popup>
                </Marker>
              </MapContainer>
            </div>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <button className="px-6 py-2 border rounded-lg">BACK</button>
        <button className="px-6 py-2 bg-orange-500 text-white rounded-lg">CONTINUE</button>
      </div>
    </div>
  );
};

export default AppointmentConfirmation;
