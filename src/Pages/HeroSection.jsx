import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheckIcon } from '@heroicons/react/outline';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#2e0249] to-[#680871] text-white py-20">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Powering Your Success with Cutting-Edge Software Solutions
          </h1>
          <p className="text-lg text-gray-200 mb-6">
            Transform your business with our innovative software products designed to enhance productivity, security, and growth. At Tekobliss, we empower organizations with scalable software solutions that drive efficiency, reduce operational costs, and accelerate digital transformation.
          </p>
          <div className="flex space-x-4">
            <Link to="/products">
              <button className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">
                Explore Solutions
              </button>
            </Link>
            <Link to="/getStarted">
              <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition duration-300">
                Get Started
              </button>
            </Link>
          </div>
        </div>

        {/* Image and Features */}
        <div className="md:w-1/2  mt-10 md:mt-0 relative">
          <img
            src="data:image/png;base64,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"
            alt="Software Solutions"
            className="w-full rounded-lg shadow-lg"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {/* Card 1 - Cloud Solutions */}
            <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 text-center">
              <div className="flex justify-center items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-12 h-12 text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                  />
                </svg>
              </div>

              <h4 className="text-xl font-semibold text-gray-800 mb-2">Cloud Solutions</h4>
              <p className="text-gray-600 text-sm">
                Secure and scalable cloud infrastructure.
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 text-center">
              <div className="flex justify-center items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-12 h-12 text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </div>

              <h4 className="text-xl font-semibold text-gray-800 mb-2">Mobile Apps</h4>
              <p className="text-gray-600 text-sm">
                Reach your customers on any device with engaging mobile experiences.
              </p>
            </div>

            {/* Card 3 - Software Development */}
            <div className="bg-white  rounded-xl p-4 shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 text-center">
              <div className="flex justify-center items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-12 h-12 text-blue-600 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm-3 9h6m-6 4h3m-3-8h4"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800  mb-2">
                Software Development
              </h4>
              <p className="text-gray-600  text-sm">
                Crafting custom software solutions to meet your business needs.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
