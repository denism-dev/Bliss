import React from "react";
import { Link } from "react-router-dom";
import ReviewsSection from "../Components/ReviewsSection";
import SalesRepCard from "../Components/SalesRepCard";
import AnnouncementBar from "../Components/AnnouncementBar";

const GetStarted = () => {
  return (
    <>
      {/* Main Section */}

      <section className="min-h-screen bg-gradient-to-r from-blue-800 to-blue-600 dark:from-gray-800 dark:to-gray-900 flex flex-col items-center justify-center py-12 px-6">
        <div className="text-center mb-8">
          <p className="text-green-400 dark:text-blue-300 font-semibold text-lg tracking-wide animate-fade-in">
            Get Started
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white dark:text-white mt-2 leading-tight">
            Get Started with <span className="text-white dark:text-blue-300">Tekobliss</span>
          </h1>
          <p className="text-lg text-white dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            We’d love to serve you. Please select one of the options below to get the best experience—whether you want to hire us for your project or try our software.
          </p>
        </div>

        <div className="container mx-auto grid md:grid-cols-2 gap-8 max-w-5xl">
          
          {/* Already Using Tekobliss Section */}
          <div className="bg-gray-800 shadow-xl rounded-lg p-6 text-center border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">Already Working With Us?</h2>
            <div className="space-y-3">
              <Link to="/login" className="block bg-blue-700 hover:bg-blue-800 !text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-md">
                Log in to View Your Project Progress
              </Link>
              <Link to="/training" className="block bg-purple-600 hover:bg-purple-700 !text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-md">
                Get a Free Training on Our Software
              </Link>
              <Link to="/remote-learning" className="block bg-red-500 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-md">
               Renew your License
              </Link>
              <Link to="/remote-learning" className="block bg-green-600 hover:bg-green-700 !text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-md">
                Get Support / Submit a Ticket
              </Link>
            </div>
          </div>

          {/* Sales Team Section */}
          <div className="bg-gray-800 shadow-xl rounded-lg p-6 text-center border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">Connect with Our Sales Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Schedule a Live Demo */}
              <div className="border border-purple-600 bg-blue-800 text-white rounded-lg p-4 hover:bg-purple-800 transition duration-300 transform hover:scale-105 shadow-md">
                <Link to="/schedule-demo" className="block font-semibold">
                  <svg className="w-8 h-8 mx-auto mb-2 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M3 21h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 00-2 2v11a2 2 0 002 2z" />
                  </svg>
                  Schedule a Live Demo
                </Link>
              </div>

              {/* Speak to a Sales Rep */}
              {/* <div className="border border-purple-600 bg-blue-800 text-white rounded-lg p-4 hover:bg-purple-800 transition duration-300 transform hover:scale-105 shadow-md">
                <Link to="/sales-rep" className="block font-semibold">
                  <svg className="w-8 h-8 mx-auto mb-2 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 00-8 0v4a4 4 0 008 0V7zM12 15v5m4 0H8" />
                  </svg>
                  Speak to a Sales Rep
                </Link>
              </div> */}

              <SalesRepCard  />

              {/* Request a Video Demo */}
              <div className="border border-purple-600 bg-blue-800 text-white rounded-lg p-4 hover:bg-purple-800 transition duration-300 transform hover:scale-105 shadow-md">
                <Link to="/video-demo" className="block font-semibold">
                  <svg className="w-8 h-8 mx-auto mb-2 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 15v-4a2 2 0 012-2h7" />
                  </svg>
                  Request a Video Demo
                </Link>
              </div>

              {/* Request Start-Up Pricing */}
              <div className="border border-purple-600 bg-blue-800 text-white rounded-lg p-4 hover:bg-purple-800 transition duration-300 transform hover:scale-105 shadow-md">
                <Link to="/school-pricing" className="block font-semibold">
                  <svg className="w-8 h-8 mx-auto mb-2 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L3 7l9 5 9-5-9-5zM3 7v10l9 5 9-5V7" />
                  </svg>
                  Request Start-Up Company Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection />
    </>
  );
};

export default GetStarted;
