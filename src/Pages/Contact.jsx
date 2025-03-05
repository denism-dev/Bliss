import { useState } from 'react';
import React from 'react';
import AnnouncementBar from '../Components/AnnouncementBar';
import NewsletterSection from '../Components/NewsletterSection';
import { PhoneIcon } from "@heroicons/react/outline";
import ContactForm from '../Components/ContactForm';


const Contact = () => {




  // 1. Define formData in the state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  // 2. Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 3. Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation check
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    // Send form data to server or display a success message
    alert("Your message has been sent successfully!");
  };



  return (
    <section className="bg-white py-16 dark:bg-gray-900">
      <AnnouncementBar />
      <div className="container px-6 py-12 mx-auto">
        <div className="text-center">
          <p className="text-blue-600 dark:text-blue-400 font-semibold">Contact Us</p>
          <h1 className="text-4xl font-bold text-gray-800 md:text-5xl dark:text-white mt-2">
            Chat with Our Friendly Team
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
            We’d love to hear from you. Please fill out this form or shoot us an email.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="hover:shadow-lg transition-shadow duration-300 p-4 rounded-lg">
              <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>

              <h2 className="mt-4 text-xl font-bold text-gray-800 dark:text-white">Email</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">Our friendly team is here to help.</p>
              <p className="mt-2 text-blue-600 dark:text-blue-400">hello@tekobliss.com</p>


                 {/* Phone */}
              <span className="inline-block p-3 mt-4 text-blue-500 rounded-full bg-green-100/80 dark:bg-gray-800">
                <PhoneIcon className="w-6 h-6" />
              </span>

              <h2 className="mt-4 text-xl font-bold text-gray-800 dark:text-white">Phone</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">Our lines are open during business hours.</p>
              <p className="mt-2 text-blue-600 dark:text-blue-400">+1 (800) 123-4567</p>

            </div>


            <div className="hover:shadow-lg transition-shadow duration-300 p-4 rounded-lg">
              <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </span>

              <h2 className="mt-4 text-xl font-bold text-gray-800 dark:text-white">Office Location</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">Visit us at our HQ.</p>
              <p className="mt-2 text-blue-600 dark:text-blue-400">1234 Street Name, City, Country</p>
            </div>
          </div>

          <ContactForm/>

        </div>
      </div>
      <NewsletterSection />
    </section>
  );
};

export default Contact;
