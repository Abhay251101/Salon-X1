import { useState, ChangeEvent, FormEvent } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    topic: "",
    agreed: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-6">
      <div className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl p-10 w-full max-w-6xl flex flex-col md:flex-row text-white shadow-lg">
        {/* Left Side - Contact Info */}
        <div className="flex-1 pr-8">
          <h2 className="text-3xl font-bold mb-4">Have a any Concern?</h2>
          <p className="text-sm mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been in the industry's standard dummy text.
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <FaEnvelope className="text-xl" />
            <span>contact@salonx.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhone className="text-xl" />
            <span>06 51 22 23 24</span>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white bg-opacity-10 p-6 rounded-lg flex-1">
          <form onSubmit={handleSubmit}>
            <select
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              className="w-full p-2 mb-3 bg-transparent border-b border-white text-white focus:outline-none"
            >
              <option className="text-black" value="" disabled>Select Topic</option>
              <option className="text-black" value="General Inquiry">General Inquiry</option>
              <option className="text-black" value="Support">Support</option>
              <option className="text-black" value="Feedback">Feedback</option>
            </select>

            <div className="flex space-x-4 mb-3">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-1/2 p-2 bg-transparent border-b border-white text-white focus:outline-none"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-1/2 p-2 bg-transparent border-b border-white text-white focus:outline-none"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 mb-3 bg-transparent border-b border-white text-white focus:outline-none"
            />

            <textarea
              name="message"
              placeholder="Message*"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 mb-3 bg-transparent border-b border-white text-white focus:outline-none"
            ></textarea>

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                className="mr-2"
              />
              <label className="text-xs">By submitting this form, I agree that the information entered will be used to contact me.</label>
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-white text-black font-bold rounded-full shadow-lg hover:bg-gray-300 transition"
            >
              SEND →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
