import Image from "next/image";

const PartnerCards: React.FC = () => {
  return (
    <div className="flex justify-center items-center gap-10 p-6">
      {/* Card 1 */}
      <div className="bg-purple-100 p-20 rounded-2xl w-150 text-center shadow-lg mt-10">
        <h2 className="text-xl font-semibold">
          Would you like to become a partner with <span className="font-bold">SalonX</span>?
        </h2>
        <p className="text-gray-600 text-sm mt-2">
          Cut the phone tag. Find your next appointment
        </p>
        <p className="text-gray-600 text-sm mt-2">
          and book instantly anytime, anywhere.
        </p>
        <button className="bg-black text-white px-6 py-2 rounded-lg mt-8">
          ADD SALON
        </button>
        <div className="mt-4">
          <Image
            className="relative top-10 left-32"
            src="/images/m3.png"
            alt="Barbers"
            width={200}
            height={150}
          />
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-green-100 p-20 rounded-2xl w-150 text-center shadow-lg mt-10">
        <h2 className="text-xl font-semibold">
          I am currently affiliated as a partner with <span className="font-bold">SalonX</span>.
        </h2>
        <p className="text-gray-600 text-sm mt-2">
          Cut the phone tag. Find your next appointment
        </p>
        <p className="text-gray-600 text-sm mt-2">
          and book instantly anytime, anywhere.
        </p>
        <button className="bg-black text-white px-6 py-2 rounded-lg mt-8">
          GO TO DASHBOARD
        </button>
        <div className="mt-4">
          <Image
            className="relative top-10 left-24 m-0 p-0"
            src="/images/m2.png"
            alt="Dashboard Illustration"
            width={200}
            height={150}
          />
        </div>
      </div>
    </div>
  );
};

export default PartnerCards;
