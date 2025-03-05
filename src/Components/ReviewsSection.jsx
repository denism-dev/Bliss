import React, { useState } from "react";

const ReviewsSection = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setShowForm(false);
  };

  return (
    <section className="bg-blue-500 dark:bg-blue-700 text-center py-8 ">
      {/* Star Rating System */}
      <div className="text-white text-lg font-semibold">Your opinion helps us grow. Rate us </div>
      <div className="flex justify-center mt-2 ">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-10 h-10 cursor-pointer transition duration-300 ${(hover || rating) >= star ? "text-yellow-400" : "text-gray-300"
              }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setRating(star)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 17.3l-5.4 2.9 1.2-5.8-4.5-3.9 5.9-.5L12 2l2.7 5.9 5.9.5-4.5 3.9 1.2 5.8z"
            />
          </svg>
        ))}
      </div>

      {/* Leave a Review Link */}
      {!submitted ? (
        <div className="mt-2 mb-3">
          <button
            onClick={() => setShowForm(true)}
            className="text-white underline hover:text-gray-200 transition duration-300"
          >
            Want to Leave a review?
          </button>
        </div>
      ) : (
        <p className="text-green-400 mt-2 mb-3">Thank you for your review! ⭐</p>
      )}

      {/* Review Form */}
      {showForm && (
        <div className="mt-4 mb-4 p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg max-w-lg mx-auto">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Submit Your Review
          </h3>
          <form onSubmit={handleSubmit} className="mt-3 ">
            <textarea
              className="w-full p-3 border rounded-md dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500"
              placeholder="Write your review here..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
            ></textarea>
            <button
              type="submit"
              className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
            >
              Submit Review
            </button>
          </form>
        </div>
      )}

      {/* Social Media Footer */}
      <footer className="bg-white dark:bg-gray-900 py-6">
        <div className="flex flex-col items-center">
          <p className="text-gray-700 dark:text-gray-300 font-semibold">
            Follow us
          </p>
          <div className="flex gap-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/50/1877F2/facebook.png" alt="Facebook" className="w-7 h-7" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/50/1DA1F2/twitter.png" alt="Twitter" className="w-7 h-7" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/50/0A66C2/linkedin.png" alt="LinkedIn" className="w-7 h-7" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/50/FF0000/youtube.png" alt="YouTube" className="w-7 h-7" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/50/E4405F/instagram.png" alt="Instagram" className="w-7 h-7" />
            </a>
          </div>

          {/* Subscribe to Blog */}
          <button
            className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300 shadow-md flex items-center gap-2 hover:scale-105 active:scale-95 w-full sm:w-auto"
            aria-label="Subscribe to our blogs"
          >
            Subscribe to our blogs
            <svg
              className="w-5 h-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              role="img"
            >
              <path
                d="M12 2a10 10 0 1 1-10 10 10.012 10.012 0 0 1 10-10zm0 2a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8zm3.5 9h-3v3a1.5 1.5 0 1 1-3 0v-3h-3a1.5 1.5 0 1 1 0-3h3V7a1.5 1.5 0 1 1 3 0v3h3a1.5 1.5 0 1 1 0 3z"
              />
            </svg>
          </button>


        </div>
      </footer>
    </section>
  );
};

export default ReviewsSection;
