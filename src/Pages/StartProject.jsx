import React, { useState } from "react";

const StartProject = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
    communication: "Email",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., sending data to a server
    alert("Your project details have been submitted successfully!");
  };

  return (
    <section className="py-24 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-800 dark:text-blue-400">
          Start Your Project
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 text-center">
          Ready to bring your ideas to life? Fill out the form below and we'll get in touch to discuss your project details.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md max-w-3xl mx-auto space-y-6"
        >
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Your Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>


            <div className="relative">
              {/* Label */}
              <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm md:text-base">
                Email Address *
              </label>

              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="example@domain.com"
                  className={`w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2
      ${/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email) ? 'border-green-500 focus:ring-green-400' : 'border-red-500 focus:ring-red-400'}`}
                />

                {/* Tooltip with Guidelines (Hidden by Default) */}
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 group">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10A8 8 0 11 2 10a8 8 0 0116 0zM9 9V5a1 1 0 112 0v4a1 1 0 01-.293.707l-2 2a1 1 0 11-1.414-1.414L9 9z" clipRule="evenodd" />
                  </svg>
                  <div className="absolute right-0 mt-2 w-64 p-2 bg-gray-800 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                    Please enter a valid email address. Example: example@domain.com
                  </div>
                </div>

                {/* Clear Button */}
                {formData.email && (
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, email: "" })}
                    className="absolute right-10 top-2 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 focus:outline-none transition-opacity duration-300 opacity-80 hover:opacity-100"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9l4-4a1 1 0 10-1.414-1.414L10 6.586 6.414 3A1 1 0 105 4.414l4 4-4 4a1 1 0 001.414 1.414L10 11.414l3.586 3.586A1 1 0 0015 14.414l-4-4z" clipRule="evenodd" />
                    </svg>
                  </button>
                )}

                {/* Validation Feedback Icon */}
                {formData.email && (
                  <div className="absolute right-3 bottom-2">
                    {/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email) ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.707-6.707a1 1 0 111.414-1.414L10 12.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-3.707-7.707a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 011.414 1.414L11.414 13l2.293 2.293a1 1 0 01-1.414 1.414L10 14.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 13l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                )}
              </div>

              {/* Error Message */}
              {formData.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email) && (
                <span className="text-red-500 text-sm mt-1 block">
                  Please enter a valid email address.
                </span>
              )}
            </div>



          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+1 (555) 123-4567"
              pattern="^\+?[0-9\s\-\(\)]+$"
              title="Please enter a valid phone number."
              className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {formData.phone && !/^\+?[0-9\s\-\(\)]+$/.test(formData.phone) && (
              <span className="text-red-500 text-sm mt-1 block">
                Please enter a valid phone number.
              </span>
            )}
          </div>


          {/* Project Details */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Project Type *</label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Project Type</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="Custom Software">Custom Software</option>
              <option value="Cloud Solutions">Cloud Solutions</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Project Description *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              maxLength="1000"
              className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-y"
              rows="5"
              placeholder="Describe your project requirements (Max 1000 characters)"
            ></textarea>

            <div className="text-right text-sm mt-1">
              <span className={`text-gray-600 dark:text-gray-400 ${formData.description.length > 900 ? 'text-red-500' : ''}`}>
                {formData.description.length}/1000 characters
              </span>
            </div>

            {formData.description.length > 1000 && (
              <span className="text-red-500 text-sm mt-1 block">
                You have exceeded the maximum character limit.
              </span>
            )}
          </div>




          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Budget Range *</label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select Budget Range</option>
                <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                <option value="$10,000 - $50,000">$10,000 - $50,000</option>
                <option value="$50,000+">$50,000+</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Preferred Communication</label>
              <select
                name="communication"
                value={formData.communication}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="Email">Email</option>
                <option value="Phone">Phone</option>
                <option value="Video Call">Video Call</option>
              </select>
            </div>
          </div>

          <button className="bg-blue-800 text-white dark:bg-blue-400 dark:text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-500 transition duration-300 shadow-md transform hover:-translate-y-1 hover:shadow-lg w-full">
            Submit Your Project Details
          </button>
        </form>
      </div>
    </section>
  );
};

export default StartProject;
