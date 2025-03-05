import React from 'react';
import { Link } from 'react-router-dom';
const IntroductionPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-blue-900 text-white py-8 shadow-lg">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">Welcome to Tekobliss 🚀</h1>
          <p className="text-lg">Your Partner in Innovative IT Solutions</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Who We Are Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Who We Are</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At <span className="font-semibold text-blue-800">Tekobliss</span>, we are committed to empowering businesses with innovative IT solutions that drive growth and efficiency. We believe in combining cutting-edge technology with seamless user experiences to create products that transform the way you do business.
          </p>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-16 bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Why Choose Tekobliss?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-800">Innovative and Interactive Solutions</h3>
              <p className="text-gray-600 mt-2">
                We bring together aesthetic design with dynamic interactive features, ensuring a seamless and engaging user experience.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-800">Efficiency and Productivity</h3>
              <p className="text-gray-600 mt-2">
                Our solutions are built with efficiency in mind, empowering businesses to achieve more in less time.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-800">Scalable and Maintainable</h3>
              <p className="text-gray-600 mt-2">
                We design our solutions to grow with your business, ensuring long-term success and ease of maintenance.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-800">Responsive & User-Centric Design</h3>
              <p className="text-gray-600 mt-2">
                Built with a mobile-first approach, our solutions provide exceptional experiences on all devices.
              </p>
            </div>
          </div>
        </section>

        {/* Business Solutions Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Our Business Solution Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-blue-800">Enterprise Resource Planning (ERP)</h3>
              <p className="text-gray-600 mt-2">
                Automate and manage your business processes seamlessly.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-blue-800">Customer Relationship Management (CRM)</h3>
              <p className="text-gray-600 mt-2">
                Build strong customer relationships and drive growth.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-blue-800">Business Intelligence & Analytics</h3>
              <p className="text-gray-600 mt-2">
                Make informed decisions with real-time analytics.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-blue-800">Cloud Solutions & Integration</h3>
              <p className="text-gray-600 mt-2">
                Scale your business with secure cloud integration.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-blue-800">Cybersecurity Solutions</h3>
              <p className="text-gray-600 mt-2">
                Safeguard your business from evolving cyber threats.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-blue-800">Mobile App Development</h3>
              <p className="text-gray-600 mt-2">
                Reach your audience on-the-go with intuitive mobile apps.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Get Started with Tekobliss Today!</h2>
          <p className="text-lg text-gray-700 mb-6">
            Ready to take your business to the next level? Contact us today to learn how Tekobliss can help you achieve your business goals with our innovative IT solutions.
          </p>
          <Link to="/contact">
            <button className="bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition">
              Contact Us
            </button>
          </Link>
        </section>
      </main>

      {/* <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Tekobliss. All Rights Reserved.
          </p>
        </div>
      </footer> */}
    </div>
  );
};

export default IntroductionPage;
