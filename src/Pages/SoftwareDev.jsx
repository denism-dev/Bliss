import React from "react";
import { Link } from "react-router-dom";



const SoftwareDevelopment = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="relative bg-cover bg-center bg-no-repeat text-white dark:text-gray-100 py-32"
          style={{ backgroundImage: `url('https://assets.rbl.ms/25591710/origin.jpg')` }}>
          <div className="absolute inset-0 bg-black opacity-50 dark:opacity-70"></div>
          <div className="relative z-10 container mx-auto text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white dark:text-blue-400">
              Software Development Services
            </h1>
            <p className="text-lg md:text-xl text-gray-300 dark:text-gray-400 max-w-3xl mx-auto">
              Transform your business with custom software solutions tailored to your needs.
              Our team specializes in building scalable, secure, and high-performance applications.
            </p>

            {/* Call to Action */}
            <div className="mt-8">
              <a
                href="#overview"
                className="bg-blue-800 text-white dark:bg-blue-400 dark:text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-500 transition duration-300 shadow-md transform hover:-translate-y-1 hover:shadow-lg"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <a href="#overview" className="animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </section>

        {/* Overview Section */}
        <section id="overview" className="py-20 bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-blue-800 dark:text-blue-400 text-center">
              Why Choose Our Software Development Services?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-4xl mx-auto text-center">
              At <span className="font-semibold text-blue-800 dark:text-blue-400">Tekobliss</span>, we understand the dynamic needs of modern businesses. Our custom software development services are designed to empower your organization by providing solutions that enhance productivity, streamline operations, and drive growth.
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto text-center">
              Whether you need a robust enterprise application, a dynamic web platform, or a mobile app, our team is equipped with the latest technologies to deliver cutting-edge solutions.
            </p>

            {/* Value Proposition Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 text-center">
                <h3 className="text-2xl font-semibold mb-2 text-blue-800 dark:text-blue-400">
                  Custom Solutions
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Tailored software to meet your unique business needs and industry requirements.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 text-center">
                <h3 className="text-2xl font-semibold mb-2 text-blue-800 dark:text-blue-400">
                  Agile Development
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Flexible and iterative development processes for faster delivery and adaptability.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 text-center">
                <h3 className="text-2xl font-semibold mb-2 text-blue-800 dark:text-blue-400">
                  Ongoing Support
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Comprehensive maintenance and support to ensure optimal performance and security.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Our Approach Section */}
        <section className="py-16 bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-semibold mb-8 text-blue-800 dark:text-blue-400 text-center">
              Our Approach to Software Development
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Consultation & Planning Card */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 text-center">
                <div className="flex justify-center items-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-blue-800 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 4h10M5 21h14a2 2 0 002-2v-5a2 2 0 00-2-2H5a2 2 0 00-2 2v5a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-400 mb-2">
                  Consultation & Planning
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We collaborate with you to understand your needs, define the project scope, and create a strategic roadmap for success.
                </p>
              </div>

              {/* Development & Testing Card */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 text-center">
                <div className="flex justify-center items-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-blue-800 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 17l-4 4m0 0l-4-4m4 4V3"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-400 mb-2">
                  Development & Testing
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our developers bring your ideas to life using modern frameworks and technologies, ensuring high performance and security.
                </p>
              </div>

              {/* Deployment & Support Card */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 text-center">
                <div className="flex justify-center items-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-blue-800 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10h4l3 10 4-14 3 6h4"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-400 mb-2">
                  Deployment & Support
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We provide seamless deployment and continuous support to ensure your software is always up-to-date and secure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Used Section */}
        <section className="py-16 bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-semibold mb-4 text-blue-800 dark:text-blue-400">
              Technologies We Use
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              We leverage the latest technologies to deliver secure, scalable, and high-performance solutions.
            </p>

            {/* Technology Icons */}
            <div className="flex flex-wrap justify-center gap-8">
              {/* React */}
              <div className="group relative">
                <img
                  src="/React.svg"
                  alt="React"
                  className="w-20 h-20 transition-transform duration-300 transform hover:scale-110"
                />
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-gray-800 text-white text-sm rounded-lg py-1 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  React - Frontend Library
                </span>
              </div>

              {/* Node.js */}
              <div className="group relative">
                <img
                  src="/nodejs.svg"
                  alt="Node.js"
                  className="w-20 h-20 transition-transform duration-300 transform hover:scale-110"
                />
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-gray-800 text-white text-sm rounded-lg py-1 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Node.js - Backend Runtime
                </span>
              </div>

              {/* AWS */}
              <div className="group relative">
                <img
                  src="/aws.svg"
                  alt="AWS"
                  className="w-20 h-20 transition-transform duration-300  transform hover:scale-110"
                />
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-gray-800 text-white text-sm rounded-lg py-1 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  AWS - Cloud Infrastructure
                </span>
              </div>

              {/* Docker */}
              <div className="group relative">
                <img
                  src="/docker.svg"
                  alt="Docker"
                  className="w-20 h-20 transition-transform duration-300 transform hover:scale-110"
                />
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-gray-800 text-white text-sm rounded-lg py-1 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Docker - Containerization
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-900 dark:to-blue-800 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white dark:text-blue-400">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg md:text-xl text-gray-200 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Let's bring your ideas to life. Our team is ready to craft innovative and tailored solutions to accelerate your business growth.
            </p>
            
            <div className="text-center">
            <Link to="/start-project" className="inline-block">
              <button className="bg-white text-blue-800 dark:bg-blue-400 dark:text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-blue-500 transition duration-300 shadow-md transform hover:-translate-y-1 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-600">
                Start Your Project
              </button>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </section>
  );
};

export default SoftwareDevelopment;
