import React, { useState } from 'react';

const faqData = {
  General: [
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach out to our dedicated customer support team via email at support@tekobliss.com or by using our contact form on the website. We are committed to responding to all inquiries within 24 hours."
    },
    {
      question: "Where is your company located?",
      answer:
        "Our headquarters are located in Tech City, USA. However, we operate globally and serve clients across multiple continents through our remote teams and strategic partnerships."
    },
    {
      question: "What are your business hours?",
      answer:
        "Our team is available from Monday to Friday, 9:00 AM to 6:00 PM (EST). However, we offer 24/7 support for critical issues and premium clients to ensure uninterrupted business operations."
    },
    {
      question: "Do you offer support for international clients?",
      answer:
        "Yes, we provide support to international clients across different time zones. Our global team of experts ensures prompt and efficient communication, regardless of your location."
    }
  ],
  "Trust & Safety": [
    {
      question: "How do you handle data security?",
      answer:
        "At Tekobliss, we prioritize your data security by implementing industry-standard encryption protocols, secure servers, and regular security audits. Our systems comply with international data protection regulations, including GDPR and CCPA."
    },
    {
      question: "Is my personal information safe?",
      answer:
        "Absolutely. We adhere to strict data privacy policies and employ advanced security measures to protect your personal information. Our team is trained in data protection best practices, ensuring complete confidentiality and security."
    },
    {
      question: "Do you comply with international data regulations?",
      answer:
        "Yes, Tekobliss is fully compliant with global data regulations, including GDPR (General Data Protection Regulation), CCPA (California Consumer Privacy Act), and other regional data privacy laws."
    },
    {
      question: "What measures do you take against cyber threats?",
      answer:
        "We use advanced cybersecurity tools, including threat detection systems, multi-factor authentication, and regular penetration testing to safeguard our systems against cyber threats and data breaches."
    }
  ],
  Services: [
    {
      question: "What services do you offer?",
      answer:
        "We offer a comprehensive range of IT solutions, including web development, cloud solutions, cybersecurity, enterprise resource planning (ERP), customer relationship management (CRM), and custom software development tailored to your business needs."
    },
    {
      question: "Do you provide custom solutions?",
      answer:
        "Yes, we specialize in delivering tailor-made solutions to meet your unique business requirements. Our team of experts works closely with you to understand your objectives and design solutions that align perfectly with your goals."
    },
    {
      question: "Do you provide consulting and strategy services?",
      answer:
        "Absolutely! Our expert consultants provide strategic guidance to help you maximize your technology investments, streamline operations, and achieve sustainable growth."
    },
    {
      question: "Do you offer support and maintenance services?",
      answer:
        "Yes, we provide comprehensive support and maintenance packages, ensuring your systems are always up-to-date, secure, and running smoothly with minimal downtime."
    }
  ],
  Billing: [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept a variety of payment methods, including major credit cards (Visa, MasterCard, American Express), PayPal, and secure bank transfers. All transactions are processed through trusted and encrypted payment gateways."
    },
    {
      question: "Can I get a refund?",
      answer:
        "Refunds are processed according to our transparent refund policy. If you are not satisfied with our services, please contact our support team within the stipulated timeframe. We are committed to ensuring customer satisfaction and will work with you to resolve any issues."
    },
    {
      question: "Do you offer flexible payment plans?",
      answer:
        "Yes, we offer flexible payment plans for our premium services and long-term projects. Our team is ready to discuss and tailor a payment schedule that suits your budget and business needs."
    },
    {
      question: "Will I receive invoices and billing statements?",
      answer:
        "Yes, all our clients receive detailed invoices and billing statements for complete transparency. Our billing team is available to answer any questions regarding charges or payment schedules."
    }
  ],
  "Office Cleaning": [
    {
      question: "Do you offer office cleaning services?",
      answer:
        "Yes, we provide professional office cleaning services tailored to maintain a clean, healthy, and productive workplace. Our services are customizable to fit your schedule and specific requirements."
    },
    {
      question: "Are your cleaning products eco-friendly?",
      answer:
        "Absolutely! We are committed to environmental sustainability. Our cleaning products are eco-friendly, non-toxic, and safe for both your workspace and the environment."
    },
    {
      question: "Do you offer customized cleaning schedules?",
      answer:
        "Yes, we understand that every business has unique cleaning needs. We offer flexible and customized cleaning schedules, including daily, weekly, and monthly services, to suit your operational hours."
    },
    {
      question: "Are your cleaning staff professionally trained?",
      answer:
        "All our cleaning staff are professionally trained, background-checked, and equipped with the latest cleaning techniques and safety protocols to ensure the highest standards of cleanliness and hygiene."
    }
  ]
};


const FAQSection = () => {
  // Default category: General
  const [activeCategory, setActiveCategory] = useState('General');
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(index === activeQuestion ? null : index);
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
      <h1 
  className="text-2xl md:text-2xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center dark:from-purple-400 dark:to-pink-600 animate-fade-in"
>
  Frequently Asked Questions
</h1>


        <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
          {/* Sidebar Navigation */}
          <aside className="lg:w-1/4 lg:mx-12 mb-8 lg:mb-0">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Table of Contents</h2>
            <ul className="mt-4 space-y-4">
              {Object.keys(faqData).map((category, index) => (
                <li key={index}>
                  <button
                    onClick={() => setActiveCategory(category)}
                    className={`block text-left w-full text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 ${
                      activeCategory === category
                        ? "text-blue-500 dark:text-blue-400 font-semibold"
                        : ""
                    }`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* FAQ Content */}
          <div className="lg:w-3/4 lg:mx-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">{activeCategory}</h2>
            {faqData[activeCategory].map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => toggleQuestion(index)}
                  className="flex items-center justify-between w-full py-4 focus:outline-none"
                  aria-expanded={activeQuestion === index}
                  aria-controls={`faq-content-${index}`}
                >
                  <h3 className="text-xl text-gray-700 dark:text-white">{item.question}</h3>
                  <svg
                    className={`w-6 h-6 text-blue-500 transition-transform duration-300 ${
                      activeQuestion === index ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={activeQuestion === index ? "M20 12H4" : "M12 4v16m8-8H4"}
                    ></path>
                  </svg>
                </button>

                {activeQuestion === index && (
                  <div
                    id={`faq-content-${index}`}
                    className="mt-2 text-gray-500 dark:text-gray-300"
                  >
                    {item.answer}
                  </div>
                )}

                <hr className="my-8 border-gray-200 dark:border-gray-700" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
