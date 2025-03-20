import React, { useState } from "react";

const Reviews: React.FC = () => {
    const reviews = [
        {
          name: "Darrell Steward",
          rating: 5,
          review:
            "I've been coming to this salon for years, and I wouldn't trust anyone else with my hair! The stylists here are incredibly talented and always know exactly what I want. Plus, the atmosphere is so welcoming and relaxing. Highly recommend!",
        },
        {
          name: "Kathryn Murphy",
          rating: 4,
          review:
            "I had the most amazing facial at this salon! The esthetician was so knowledgeable and really took the time to customize the treatment to my skin's needs. My skin has never looked or felt better. Can't wait to book my next appointment!",
        },
        {
          name: "Kalem Chessor",
          rating: 3,
          review:
            "As someone who's always been nervous about getting waxed, I was pleasantly surprised by my experience at this salon. The technician made me feel completely at ease and did an excellent job. I'll definitely be returning!",
        },
        {
          name: "Michael Johnson",
          rating: 5,
          review:
            "I recently booked a spa day for myself and some friends at this salon, and it exceeded all of our expectations! From the moment we walked in, we were treated like royalty. The staff went above and beyond to ensure we had a relaxing and enjoyable experience. We'll definitely be back!",
        },
        {
          name: "Samantha Green",
          rating: 2,
          review:
            "The salon experience was okay, but I felt the service was rushed. Expected more for the price I paid.The staff went above and beyond to ensure we had a relaxing and enjoyable experience. We'll definitely be back!",
        },
        {
          name: "Jake Thompson",
          rating: 4,
          review:
            "Good salon with friendly staff. The haircut was great, but the waiting time was a bit long.I was pleasantly surprised by my experience at this salon. The technician made me feel completely at ease and did an excellent job. I'll definitely be returning!",
        },
        {
          name: "Emily Carter",
          rating: 1,
          review:
            "I was really disappointed. The stylist didn’t listen to what I wanted, and my hair turned out completely different.",
        },
        {
          name: "Ryan Adams",
          rating: 5,
          review:
            "Absolutely fantastic! The spa treatment was the best I've had. The atmosphere was calming, and the staff was super friendly.The staff went above and beyond to ensure we had a relaxing and enjoyable experience. We'll definitely be back!",
        },
        {
          name: "Sophia Lee",
          rating: 3,
          review:
            "Decent experience, but nothing extraordinary. The place was clean, and the service was okay.",
        },
        {
          name: "William Brown",
          rating: 2,
          review:
            "I expected better service for the price. The staff was polite, but the results were not what I had hoped forI was pleasantly surprised by my experience at this salon. The technician made me feel completely at ease and did an excellent job. I'll definitely be returning!.",
        },
        {
          name: "Olivia Martinez",
          rating: 4,
          review:
            "Loved the facial treatment! My skin felt refreshed and glowing. Would definitely come back.The staff went above and beyond to ensure we had a relaxing and enjoyable experience. We'll definitely be back!",
        },
        {
          name: "Daniel White",
          rating: 5,
          review:
            "This is my go-to salon! The hair treatments are always on point, and I love the relaxing ambiance.",
        },
      ];
      
      

  const ratingCounts = [1275, 1023, 898, 40, 20];

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 4;

  // Calculate indexes for slicing
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Header & Review Summary - Side by Side */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        
        {/* Left: Heading */}
        <div className="md:w-1/2 text-center md:text-left ml-20">
          <h2 className="text-3xl font-semibold">Reviews</h2>
          <p className="text-gray-500 mt-2">
            Découvrez les témoignages de nos clients qui ont acheté cet article
          </p>
        </div>

        {/* Right: Review Summary */}
        <div className="md:w-1/2 flex flex-col md:flex-row items-center md:justify-end mt-6 md:mt-0 space-y-6 md:space-y-0 md:space-x-12 mr-48 ml-10">
          <div className="text-center">
          <div className="flex items-center justify-center w-20 h-20 border-4 border-gray-300 rounded-full p-20">
  <div className="text-5xl font-bold">4.9</div>
</div>
            <div className="flex justify-center mt-2 text-yellow-400">
              {Array(5).fill(0).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            {ratingCounts.map((count, i) => (
              <div key={i} className="flex items-center">
                <div className="flex text-yellow-400">
                  {Array(5 - i).fill(0).map((_, j) => (
                    <span key={j}>★</span>
                  ))}
                  {Array(i).fill(0).map((_, j) => (
                    <span key={j} className="text-gray-300">★</span>
                  ))}
                </div>
                <div className="w-32 h-2 bg-gray-200 rounded-full ml-2 relative">
                  <div
                    className="h-2 bg-orange-400 rounded-full"
                    style={{ width: `${(count / 1275) * 100}%` }}
                  ></div>
                </div>
                <span className="ml-2 text-sm text-gray-600">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews Grid (Paginated) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {currentReviews.map((review, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex text-yellow-400">
              {Array(review.rating).fill(0).map((_, i) => (
                <span key={i}>★</span>
              ))}
              {Array(5 - review.rating).fill(0).map((_, i) => (
                <span key={i} className="text-gray-300">★</span>
              ))}
            </div>
            <p className="mt-2 text-gray-700">{review.review}</p>
            <p className="mt-4 font-semibold text-orange-500">{review.name}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-3">
        {[1, 2, 3].map((num) => ( // Adjusted to match number of pages (2 pages with 2 reviews each)
          <button
            key={num}
            onClick={() => setCurrentPage(num)} // Change page on click
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              num === currentPage ? "bg-black text-white" : "bg-gray-200 text-black"
            }`}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
