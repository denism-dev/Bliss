
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/outline';
import AnnouncementBar from '../Components/AnnouncementBar';

const Services = () => {
  return (
    <main className="bg-white mx-1 py-16 text-gray-800">
      <AnnouncementBar/>
 {/* Hero Section */}
<section className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white dark:from-gray-800 dark:to-gray-900 py-24 overflow-hidden">
  <div className="container mx-auto text-center px-4">
    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white dark:text-blue-400">
      Our Services
    </h1>
    <p className="text-lg md:text-xl text-gray-200 dark:text-gray-400 max-w-2xl mx-auto">
      Empowering your business with cutting-edge solutions crafted for success.
    </p>
  </div>
  
  {/* Wave Divider */}
  <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0]">
    <svg 
      className="relative block w-full h-20" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 1440 320"
    >
      <path 
        className="fill-white dark:fill-gray-900" 
        d="M0,192L48,192C96,192,192,192,288,170.7C384,149,480,107,576,106.7C672,107,768,149,864,176C960,203,1056,213,1152,192C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  </div>
</section>
{/* Why Choose Us */}
<section className="py-16 bg-gray-100 dark:bg-gray-900">
  <div className="container mx-auto text-center px-4">
    <h2 className="text-4xl font-bold mb-8 text-blue-800 dark:text-blue-400">
      Why Choose Tekobliss for your projects?
    </h2>
    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-12">
      At <span className="font-semibold text-blue-800 dark:text-blue-400">Tekobliss</span>, we are committed to delivering exceptional software solutions that drive growth and efficiency. Here’s why we stand out:
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Expert Team Card */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
        <CheckCircleIcon className="w-12 h-12 text-blue-800 dark:text-blue-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
          Expert Team
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Our team of professionals is dedicated to providing innovative solutions tailored to your business needs.
        </p>
      </div>

      {/* Customer-Centric Approach Card */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
        <CheckCircleIcon className="w-12 h-12 text-blue-800 dark:text-blue-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
          Customer-Centric Approach
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          We prioritize our clients’ needs to ensure their success and satisfaction at every stage.
        </p>
      </div>

      {/* Scalable Solutions Card */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
        <CheckCircleIcon className="w-12 h-12 text-blue-800 dark:text-blue-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
          Scalable Solutions
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          We design flexible and scalable solutions that grow with your business.
        </p>
      </div>
    </div>
  </div>
</section>


  {/* Our Services */}
<section className="py-16 bg-gray-100 dark:bg-gray-900">
  <div className="container mx-auto text-center px-4">
    <h2 className="text-4xl font-bold mb-8 text-blue-800 dark:text-blue-400">
      Our Services
    </h2>
    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-12">
      Explore our range of services designed to accelerate your business growth.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Web Development Card */}
      <div className="service-card bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
        <img 
          src="https://assets.rbl.ms/25591710/origin.jpg" 
          alt="Web Development" 
          className="w-16 h-16 mx-auto mb-4"
        />
        <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
          Software Development
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Building responsive and dynamic Softwares tailored to your needs.
        </p>
        <Link 
          to="/services/softwareDevelopment" 
          className="!text-blue-800 dark:text-blue-400 font-semibold hover:underline flex items-center justify-center gap-1"
        >
          Learn More <ArrowRightIcon className="w-4 h-4" />
        </Link>
      </div>

      {/* Cloud Solutions Card */}
      <div className="service-card bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
        <img 
          src="https://riseuplabs.com/wp-content/uploads/2021/07/mobile-application-development-guidelines-riseuplabs.jpg" 
          alt="Cloud Solutions" 
          className="w-16 h-16 mx-auto mb-4"
        />
        <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
          Mobile App Development
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Scalable cloud infrastructure to enhance operational efficiency.
        </p>
        <Link 
          to="/services/MobileDevelopment" 
          className="!text-blue-800 dark:text-blue-400 font-semibold hover:underline flex items-center justify-center gap-1"
        >
          Learn More <ArrowRightIcon className="w-4 h-4" />
        </Link>
      </div>

      {/* Cyber Security Card */}
      <div className="service-card bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
        <img 
          src="https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1709831996/catalog/1328732333903888384/fydohped85bwrh5mljbz.webp" 
          alt="Cyber Security" 
          className="w-16 h-16 mx-auto mb-4"
        />
        <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
          Expert SEO Services
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Comprehensive security solutions to safeguard your digital assets.
        </p>
        <Link 
          to="/services/seoServices" 
          className="!text-blue-800 dark:text-blue-400 font-semibold hover:underline flex items-center justify-center gap-1"
        >
          Learn More <ArrowRightIcon className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </div>
</section>



 {/* Call to Action Section */}
<section className="py-16 rounded-3xl mx-4 mt-5 md:mx-8 bg-blue-800 text-white text-center shadow-lg dark:bg-blue-900 transition duration-300">
  <h2 className="text-4xl font-bold mb-4 text-white dark:text-blue-400">
    Ready to try out our services?
  </h2>
  <p className="text-lg mb-8 text-gray-200 dark:text-gray-300">
    Contact us today to learn how <span className="font-semibold text-white dark:text-blue-400">Tekobliss</span> custom softwares can help you achieve your business goals.
  </p>
  <Link to="/start-project">
    <button className="bg-white text-blue-800 dark:bg-blue-400 dark:text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-blue-500 transition duration-300 shadow-md transform hover:-translate-y-1 hover:shadow-lg">
      Tell Us About Your Project
    </button>
  </Link>
</section>

    </main>
  );
};

export default Services;
