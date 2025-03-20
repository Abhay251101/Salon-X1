import { FaChevronUp } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 mt-10 w-full absolute bottom-100 left-0 right-0">
      <div className="max-w-screen-xl mx-auto  px-6 grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-0">
        {/* Logo and Description */}
        <div>
          <h2 className="text-xl font-bold text-orange-400">SALON-X</h2>
          <p className="mt-4 text-sm text-gray-400">
            SalonX offers a luxurious and innovative salon experience, blending
            cutting-edge techniques with personalized service to bring out the
            best in every client.
          </p>
        </div>

        {/* Links and About */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-orange-400 font-semibold mb-3">LINK</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Unisex Services</li>
              <li>Women Services</li>
              <li>Men Services</li>
              <li>Our History</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="text-orange-400 font-semibold mb-3">ABOUT</h3>
            <ul className="text-gray-400 space-y-2">
              <li>FAQ</li>
              <li>Contact Us</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-orange-400 font-semibold mb-3">CONTACT</h3>
          <ul className="text-gray-400 space-y-2">
            <li>contact@salonx.com</li>
            <li>+33 888 666 433</li>
            <li>Empire State Building, New York</li>
            <li>9h00 - 17h00</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-6 flex justify-center items-center">
        <p className="text-gray-500 text-sm text-center">
          &copy; 2024 Salon X. All rights reserved.
        </p>
      </div>

      {/* Back to Top Button */}
      <div className="fixed bottom-5 right-5">
        <button className="p-3 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition">
          <FaChevronUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
