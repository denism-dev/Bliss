import React, { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // Email Validation Regex
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Handle Subscription
  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setMessage("Please enter a valid email address.");
      setIsSuccess(false);
      return;
    }

    setMessage("Thank you for subscribing! 🎉 Stay tuned for updates.");
    setIsSuccess(true);

    // Clear input after submission
    setEmail("");
  };

  return (
    <section className="bg-gradient-to-b from-[#2e0249] to-[#680871] mt-3 py-6 rounded-2xl mx-2 px-6 font-[sans-serif]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-white md:text-3xl text-4xl font-extrabold mb-4">
          Stay Connected with Us!
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Subscribe to our newsletter and be the first to know about the latest tech trends, industry insights, and exclusive updates. Join our community and stay ahead with Tekobliss!
        </p>

        {/* Subscription Form */}
        <form onSubmit={handleSubscribe} className="w-full max-w-md mx-auto">
          <div className="bg-white shadow-lg rounded-full p-2 flex items-center gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className={`flex-grow bg-transparent border-none py-2 px-4 text-[#2e0249] text-sm md:text-base focus:outline-none placeholder-opacity-70 rounded-full ${
                message && !isSuccess ? "border-red-500 border" : "border-transparent"
              }`}
              aria-label="Email address"
              required
            />
            <button
              type="submit"
              className="flex-shrink-0 bg-[#a91079] hover:bg-[#680871] text-white font-semibold py-2 px-6 rounded-full transition duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#a91079] focus:ring-opacity-50"
              aria-label="Subscribe"
            >
              Subscribe
            </button>
          </div>

          {/* Validation / Success Message */}
          {message && (
            <p
              className={`text-sm mt-3 ${
                isSuccess ? "text-green-400" : "text-red-400"
              }`}
            >
              {message}
            </p>
          )}
        </form>

        {/* Privacy Statement */}
        <p className="text-sm text-gray-400 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;
