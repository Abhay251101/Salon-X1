import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: { question: string; answer: string }[] = [
    {
      question: "How long will it take to build this application?",
      answer:
        "The time required to build an application can vary significantly depending on various factors such as the complexity of the application, the size of the development team, the availability of resources, and the project management approach.",
    },
    {
      question: "Will you be hiring developers or using an internal team?",
      answer: "Our team consists of both in-house developers and external experts, ensuring the best quality and efficiency.",
    },
    {
      question: "What are the benefits of mobile app development for businesses?",
      answer: "Mobile apps help businesses reach a larger audience, improve customer engagement, and streamline operations.",
    },
    {
      question: "How much does it cost to develop a mobile application?",
      answer: "The cost of development varies based on app complexity, features, and platform requirements.",
    },
    {
      question: "How do I choose the right mobile app development service provider?",
      answer: "Consider expertise, portfolio, client reviews, and post-launch support when selecting a development partner.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto p-6 text-center">
      <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
      <p className="text-gray-600 mt-2">Ask everything you need to know about our products and services.</p>
      <p className="text-gray-600 mt-2">We are ready to answer your questions..</p>

      <div className="mt-6 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border rounded-lg p-4 text-left cursor-pointer transition-all ${
              openIndex === index ? "border-orange-400 bg-orange-50" : "border-gray-300"
            }`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-medium">{faq.question}</h3>
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {openIndex === index && <p className="text-gray-600 mt-2">{faq.answer}</p>}
          </div>
        ))}
      </div>

      <button className="mt-6 px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100 transition">
        View More
      </button>
    </section>
  );
};

export default FAQSection;
