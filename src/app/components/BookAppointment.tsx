"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const availableTimeSlots = [
  "10:00 am", "10:30 am", "11:00 am", "11:30 am",
  "12:00 pm", "12:30 pm", "1:00 pm", "1:30 pm",
  "2:00 pm", "2:30 pm", "3:00 pm", "3:30 pm",
  "4:00 pm", "4:30 pm"
];

const BookAppointment = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [cart, setCart] = useState<{ service: string; price: number }[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Retrieve cart data from query params
  useEffect(() => {
    const items: { service: string; price: number }[] = [];
    for (let i = 0; searchParams.has(`service${i}`); i++) {
      items.push({
        service: searchParams.get(`service${i}`) || "",
        price: parseFloat(searchParams.get(`price${i}`) || "0"),
      });
    }
    setCart(items);
  }, [searchParams]);

  // Handle Continue Button Click
  const handleContinue = () => {
    if (!selectedDate || !selectedTime) return;

    const queryParams = new URLSearchParams();
    queryParams.append("date", selectedDate.toISOString().split("T")[0]);
    queryParams.append("time", selectedTime);

    cart.forEach((item, index) => {
      queryParams.append(`service${index}`, item.service);
      queryParams.append(`price${index}`, item.price.toString());
    });

    // Navigate to confirmation page with query params
    router.push(`/appointment-confirmation?${queryParams.toString()}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-[800px] mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-4">Book Appointment</h2>

      {/* Selected Services */}
      <div className="mb-6">
        <h3 className="text-lg font-medium">Your Services:</h3>
        {cart.length === 0 ? (
          <p className="text-gray-500">No services selected.</p>
        ) : (
          <ul className="mt-2">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between border-b py-2">
                <span>{item.service}</span>
                <span className="font-semibold">${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Calendar Section */}
      <div className="flex justify-between">
        <div>
          <Calendar
            onChange={(date) => setSelectedDate(date as Date)}
            value={selectedDate}
            minDate={new Date()}
            className="border rounded-lg p-2"
          />
        </div>

        {/* Time Selection */}
        <div className="ml-6">
          <h3 className="font-medium mb-2">Select time</h3>
          <div className="grid grid-cols-3 gap-2">
            {availableTimeSlots.map((time, index) => (
              <button
                key={index}
                className={`px-4 py-2 border rounded-lg ${
                  selectedTime === time ? "bg-black text-white" : "bg-gray-100"
                }`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <button
        onClick={handleContinue}
        className="mt-6 w-full bg-orange-500 text-white py-2 rounded-lg"
        disabled={!selectedDate || !selectedTime}
      >
        CONTINUE
      </button>
    </div>
  );
};

export default BookAppointment;
