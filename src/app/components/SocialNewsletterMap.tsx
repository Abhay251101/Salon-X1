import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoXing } from "react-icons/io";
import { useState } from "react";

const SocialNewsletterMap: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  return (
    <div className="flex flex-col md:flex-row w-full h-full p-10 space-y-18 md:space-y-0 md:space-x-28 h-[400px]">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center text-center space-y-6">
        {/* Social Media Section */}
        <div>
          <h3 className="text-gray-500 text-sm">SOCIAL NETWORK</h3>
          <h2 className="text-xl font-semibold">Follow us on our network</h2>
          <div className="flex justify-center space-x-4 mt-3 text-orange-500 text-2xl mb-6">
            <FaFacebook />
            <IoLogoXing />
            <FaInstagram />
            <MdEmail />
            <FaYoutube />
          </div>
        </div>

        <hr className="w-3/4 border-gray-300" />

        {/* Newsletter Section */}
        <div>
          <h3 className="text-gray-500 text-sm mt-6">NEWSLETTER</h3>
          <h2 className="text-xl font-semibold">Be the first to know</h2>
          <div className="flex justify-center items-center space-x-2 mt-3">
            <input
              type="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              placeholder="Enter your email"
              className="border-b border-gray-400 focus:outline-none px-2 py-1 w-64"
            />
            <button className="bg-black text-white px-4 py-2 rounded-full">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Right Section - Map */}
      <div className="w-full h-[350px] w-[700px]">
        <iframe
          className="w-full h-[200px] md:h-full rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24183.22514183018!2d-74.0060156!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316df34b6d%3A0xe08ef6dfb6e6a5c7!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1646644732198!5m2!1sen!2sus"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default SocialNewsletterMap;
