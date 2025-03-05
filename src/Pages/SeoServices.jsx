import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon, CheckCircleIcon, ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/outline";
import NewsletterSection from "../Components/NewsletterSection";





const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, Tech Innovators",
    quote:
      "Our website traffic increased by 300% within 6 months. Tekobliss provided top-tier SEO strategies that delivered real ROI!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "David Thompson",
    role: "Marketing Director, E-Commerce Hub",
    quote:
      "Thanks to their SEO expertise, we outrank competitors and have consistent leads flowing in. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Emily White",
    role: "Founder, Startup Growth Lab",
    quote:
      "Tekobliss helped us scale organically! We saw a 150% increase in search rankings and more qualified leads.",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
  },
];

const faqs = [
  {
    question: "How long does it take to see SEO results?",
    answer:
      "SEO is a long-term investment, and results typically start becoming noticeable within 3 to 6 months. The exact timeframe depends on factors such as industry competitiveness, keyword difficulty, website history, and content quality. If you're targeting highly competitive keywords, it may take longer to rank, whereas lower competition keywords can yield faster results. Our approach involves a steady combination of technical SEO, content creation, and link-building to ensure sustainable ranking improvements over time."
  },
  {
    question: "Do you provide monthly reports?",
    answer:
      "Yes, we provide detailed monthly reports that give you full transparency on your website's SEO performance. Our reports include keyword ranking updates, organic traffic growth, backlink acquisition, technical SEO improvements, and insights on user engagement. Additionally, we provide recommendations on further optimization strategies based on data analytics. You will have full access to tools like Google Analytics, Google Search Console, and other performance-tracking platforms to monitor progress in real-time."
  },
  {
    question: "Is there a contract?",
    answer:
      "No, we do not require long-term contracts. Our SEO services operate on a month-to-month basis, meaning you have the flexibility to continue based on results and satisfaction. We believe in proving our value through performance rather than locking clients into long-term commitments. Most of our clients stay with us long-term because of the measurable growth we deliver, but you are free to adjust or cancel your service at any time with no penalties."
  },
  {
    question: "Do you optimize for mobile SEO?",
    answer:
      "Absolutely! Mobile optimization is essential for modern SEO success, as over 60% of searches now happen on mobile devices. Our mobile SEO strategy includes improving page speed, optimizing images and layout for responsiveness, implementing mobile-friendly navigation, and enhancing core web vitals such as Largest Contentful Paint (LCP) and First Input Delay (FID). Additionally, we ensure that content is structured properly for Google's mobile-first indexing, which prioritizes mobile-friendly websites in search rankings."
  },
  {
    question: "What makes your SEO approach different?",
    answer:
      "Unlike generic SEO agencies that use cookie-cutter strategies, we develop customized SEO plans tailored to your business goals and industry needs. Our approach is data-driven, focusing on in-depth competitor analysis, advanced keyword research, and white-hat link-building techniques. We stay up to date with Google's algorithm updates to ensure long-term ranking success. Additionally, our team prioritizes transparency, providing regular updates and measurable insights to demonstrate real ROI."
  },
  {
    question: "Do you offer local SEO services?",
    answer:
      "Yes! We specialize in local SEO to help businesses improve their visibility in local search results. This includes optimizing Google My Business profiles, managing online reviews, creating localized content, and building high-quality local citations. By targeting geo-specific keywords and improving local search presence, we help businesses attract nearby customers and dominate search results in their service areas."
  },
  {
    question: "Can you help recover from a Google penalty?",
    answer:
      "Yes, if your website has been hit by a Google penalty due to algorithm updates or manual actions, we can perform a full site audit to diagnose the issue and implement a recovery strategy. This includes identifying and removing toxic backlinks, fixing duplicate content issues, improving technical SEO, and ensuring compliance with Google's webmaster guidelines. Our goal is to help your site regain its rankings and restore search engine trust as quickly as possible."
  },
  {
    question: "How do you track the success of an SEO campaign?",
    answer:
      "We use a combination of tools such as Google Analytics, Google Search Console, SEMrush, and Ahrefs to track key performance metrics. These include organic traffic growth, keyword ranking improvements, domain authority, conversion rates, and engagement metrics like bounce rate and session duration. By monitoring these KPIs, we can adjust and refine your SEO strategy to maximize results over time."
  }
];


const SeoServices = () => {

 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null); // Reference for form container

  // Close form when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setShowForm(false);
      }
    };

    if (showForm) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showForm]);





  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <section className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-24">
      <div className="container mx-auto px-4">

        {/* Hero Section */}
        <section className="relative bg-cover bg-center bg-no-repeat text-white dark:text-gray-100 py-32"
          style={{ backgroundImage: `url('https://assets.rbl.ms/25591710/origin.jpg')` }}>
          <div className="absolute inset-0 bg-black opacity-50 dark:opacity-70"></div>

          <div className="relative z-10 container mx-auto text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white dark:text-blue-400">
              Dominate Search Rankings with Expert SEO Services
            </h1>
            <p className="text-lg md:text-xl text-gray-300 dark:text-gray-400 max-w-3xl mx-auto">
              Increase traffic, boost conversions, and grow your business with data-driven SEO strategies.
              Our proven techniques help you rank higher, attract quality leads, and stay ahead of the competition.
            </p>

            {/* Key SEO Benefits */}
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-lg text-gray-200 dark:text-gray-300">
              <div className="bg-blue-900 dark:bg-gray-800 px-6 py-3 rounded-lg shadow-md">
                ✅ Higher Google Rankings
              </div>
              <div className="bg-blue-900 dark:bg-gray-800 px-6 py-3 rounded-lg shadow-md">
                📈 Increased Organic Traffic
              </div>
              <div className="bg-blue-900 dark:bg-gray-800 px-6 py-3 rounded-lg shadow-md">
                🎯 Targeted Lead Generation
              </div>
              <div className="bg-blue-900 dark:bg-gray-800 px-6 py-3 rounded-lg shadow-md">
                🚀 ROI-Driven Strategies
              </div>
            </div>

            {/* Call to Action */}
            {/* <div className="mt-8">
              <a
                href="#overview"
                className="bg-blue-800 text-white dark:bg-blue-400 dark:text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-500 transition duration-300 shadow-md transform hover:-translate-y-1 hover:shadow-lg"
              >
                Get a Free SEO Audit
              </a>
            </div> */}
          </div>
        </section>

        {/* Overview Section */}
        <section id="overview" className="py-24 bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-6">

            {/* Section Heading */}
            <div className="text-center mb-12">
              <h2 className="text-5xl font-extrabold text-blue-800 dark:text-blue-400">
                Why Our SEO Services Deliver Real Results
              </h2>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mt-4">
                At <span className="font-semibold text-blue-800 dark:text-blue-400">Tekobliss</span>, we don’t just optimize for search engines—we optimize for <strong>your success</strong>.
                Our data-driven SEO strategies <strong>increase traffic, boost conversions, and generate leads</strong> that <strong>grow your business</strong>.
              </p>
            </div>

            {/* Value Proposition Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

              {/* High ROI Focus */}
              <div className="relative bg-white dark:bg-gray-800 p-10 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 text-center">
                <div className="flex justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-blue-800 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 19c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8Z" />
                    <path d="M16 12H8m0 0l4-4m-4 4 4 4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-400">
                  More Traffic & Leads
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-3">
                  Get high-intent visitors that <strong>convert into paying customers</strong>—not just empty clicks.
                </p>
                <div className="absolute -top-3 right-3 text-sm font-semibold bg-blue-600 text-white px-3 py-1 rounded-full shadow-md">
                  🔥 Popular
                </div>
              </div>

              {/* Custom-Tailored Strategy */}
              <div className="bg-white dark:bg-gray-800 p-10 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 text-center">
                <div className="flex justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-blue-800 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16v16H4z" />
                    <path d="M12 12l8-4-8-4-8 4 8 4Z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-400">
                  Custom SEO Strategy
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-3">
                  No <strong>cookie-cutter solutions</strong>—we create <strong>tailored strategies</strong> that fit your industry & goals.
                </p>
              </div>

              {/* Ongoing Optimization */}
              <div className="bg-white dark:bg-gray-800 p-10 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 text-center">
                <div className="flex justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-blue-800 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 12h3m12 0h3M4 6h16M4 18h16" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-400">
                  Continuous Growth
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-3">
                  We <strong>analyze & optimize</strong> your rankings <strong>every month</strong> to ensure lasting success.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center relative">
      {/* CTA Button */}
      <button
        onClick={() => setShowForm((prev) => !prev)}
        className="inline-block bg-gradient-to-r from-blue-800 to-blue-600 text-white dark:bg-blue-400 dark:text-gray-900 px-12 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-500 transition duration-300 shadow-lg transform hover:-translate-y-1 hover:shadow-xl"
      >
        {showForm ? "Fill the form to get free Audit " : "Get a Free SEO Audit"}
      </button>

      {/* Lead Capture Form (Appears when clicked) */}
      {showForm && (
        <div
          ref={formRef}
          className="mt-8 bg-blue-800 dark:bg-blue-600 p-8 rounded-lg shadow-lg text-white text-center max-w-3xl mx-auto animate-fade-in absolute left-1/2 transform -translate-x-1/2 w-full md:w-[500px] z-50"
        >
          <h3 className="text-3xl font-bold">Get Your Free SEO Audit</h3>
          <p className="mt-2 text-gray-200">
            Enter your details, and we’ll analyze your website for SEO improvements.
          </p>

          {/* Close Button Inside Form */}
          <button
            onClick={() => setShowForm(false)}
            className="absolute top-4 right-4 bg-gray-100 text-blue-800 px-2 py-1 rounded-full hover:bg-gray-300 transition"
          >
            ✖
          </button>

          <form className="mt-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 mb-3 rounded-lg border border-gray-300 dark:border-gray-600 text-black dark:text-white"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 mb-3 rounded-lg border border-gray-300 dark:border-gray-600 text-black dark:text-white"
              required
            />
            <input
              type="text"
              placeholder="Your Website URL"
              className="w-full px-4 py-3 mb-3 rounded-lg border border-gray-300 dark:border-gray-600 text-black dark:text-white"
              required
            />
            <button
              className="w-full bg-white text-blue-800 font-semibold py-3 rounded-lg hover:bg-gray-200 transition"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>

          </div>
        </section>



        {/* Testimonials */}
        <section id="testimonials" className="py-20 bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white">What Our Clients Say</h3>
            <div className="relative mt-6 bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
              <p className="text-lg italic text-gray-700 dark:text-gray-300">
                "{testimonials[currentIndex].quote}"
              </p>
              <div className="flex items-center justify-center mt-4">
                <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-12 h-12 rounded-full border-2 border-blue-800 dark:border-blue-400" />
                <div className="ml-3">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-400">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
                <button onClick={prevTestimonial}>
                  <ChevronLeftIcon className="w-6 h-6 text-blue-800 dark:text-blue-400" />
                </button>
              </div>
              <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
                <button onClick={nextTestimonial}>
                  <ChevronRightIcon className="w-6 h-6 text-blue-800 dark:text-blue-400" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-blue-800 dark:text-blue-400">
            Get Found on Google with Proven SEO Strategies
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mt-4">
            We help businesses rank higher, increase organic traffic, and generate more leads with
            customized SEO solutions.
          </p>
        </div>

        {/* How Our SEO Process Works */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-center text-blue-800 dark:text-blue-400">How Our SEO Process Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
             {
              title: "1. Website Audit & Technical SEO Analysis",
              description:
                "A successful SEO campaign starts with a comprehensive website audit to assess the current health of your website. We analyze over 200 ranking factors using advanced tools to identify and fix critical issues like crawl errors, indexability problems, duplicate content, site speed issues, and mobile usability flaws. This audit provides a solid roadmap to optimize your website for maximum visibility and long-term ranking improvements. We ensure that your website follows Google's best practices, improving your site's performance, user experience, and search engine compliance."
            },
            {
              title: "2. Keyword Research & Competitor Analysis",
              description:
                "Keyword research is the foundation of a successful SEO strategy. Our team uses AI-powered keyword analysis tools to identify high-intent, high-converting keywords with the best search volume-to-competition ratio. Beyond basic keyword selection, we conduct competitor analysis to uncover the exact keywords that top-ranking competitors use. This insight helps us craft a winning strategy that targets untapped ranking opportunities. Additionally, we map keywords to specific pages to ensure proper site structure and optimize for voice search, long-tail queries, and local SEO for higher visibility."
            },
            {
              title: "3. On-Page Optimization & UX/UI Enhancements",
              description:
                "On-page SEO ensures that your content, HTML, and website structure are properly optimized for search engines and users. We fine-tune crucial elements such as title tags, meta descriptions, and header structure for keyword relevance. Image and video optimization enhances site speed and user engagement. Internal linking strategies improve navigation and distribute link equity across pages. Mobile-first optimization and UX/UI improvements reduce bounce rates and boost conversions. Every change is backed by data insights and industry best practices to help your site perform better."
            },
            {
              title: "4. Link Building & High-Authority Backlinks",
              description:
                "Backlinks remain one of the top ranking factors in Google’s algorithm. We focus on acquiring high-quality, industry-relevant backlinks through a content-driven approach. Our backlink strategy includes guest posting on authoritative sites within your niche, earning natural backlinks through valuable content, and building local citations to strengthen domain authority. We also monitor and remove toxic links that could harm rankings. Unlike spammy link-building techniques that risk penalties, our method ensures sustainable growth, higher rankings, and long-term SEO success."
            },
            {
              title: "5. Content Strategy & SEO Copywriting",
              description:
                "Content plays a vital role in SEO, helping businesses rank higher and engage their audience. Our team creates high-quality, SEO-optimized content that speaks to your audience’s needs while improving search visibility. We produce blog posts, landing pages, and service pages that drive organic traffic. Evergreen content and pillar pages provide long-term ranking potential. Our content marketing strategies also leverage social media and guest posting to expand reach. Every piece of content is designed to be engaging, informative, and conversion-focused."
            },
            {
              title: "6. Performance Tracking, Analytics & Continuous SEO Optimization",
              description:
                "SEO is an ongoing process that requires constant monitoring, analysis, and adaptation. We provide real-time performance tracking to measure organic traffic trends, keyword rankings, and conversions. Google Analytics and Search Console integration help track visitor behavior and search performance. Regular audits identify and fix technical issues such as broken links and outdated content. We also optimize CTAs and fine-tune pages for better conversion rates. Every strategy we implement is backed by insights that drive measurable growth for your business."
            }
            ].map((step, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-400">{step.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mt-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="mt-20 text-center">
          <h2 className="text-4xl font-bold text-blue-800 dark:text-blue-400">Industries We Serve</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mt-4">
            We specialize in SEO for a variety of industries, helping businesses of all sizes grow their online presence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {["E-Commerce", "Real Estate", "Healthcare", "Finance", "SaaS & Tech", "Local Businesses"].map((industry, index) => (
              <div key={index} className="bg-blue-800 dark:bg-blue-600 text-white p-6 rounded-lg shadow-lg">
                {industry}
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & Packages */}
        <div className="mt-20 text-center">
          <h2 className="text-4xl font-bold text-blue-800 dark:text-blue-400">Pricing & Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { title: "Basic Plan", price: "$499/mo", features: ["Keyword Research", "On-Page SEO", "Monthly Reporting"] },
              { title: "Pro Plan", price: "$999/mo", features: ["All Basic Features", "Link Building", "Content Optimization"] },
              { title: "Enterprise Plan", price: "$1999/mo", features: ["All Pro Features", "Custom SEO Strategy", "Dedicated Account Manager"] }
            ].map((plan, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-400">{plan.title}</h3>
                <p className="text-xl font-bold mt-2">{plan.price}</p>
                <ul className="mt-4 text-gray-700 dark:text-gray-300">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center justify-center">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-4xl font-bold text-blue-800 dark:text-blue-400">Frequently Asked Questions</h2>
          <div className="mt-8 text-left max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="mb-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition duration-300 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                {/* Question Section */}
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
                    {faq.question}
                  </h3>
                  <ChevronDownIcon
                    className={`w-6 h-6 text-blue-600 dark:text-blue-400 transform ${openIndex === index ? "rotate-180" : "rotate-0"
                      } transition-transform`}
                  />
                </div>

                {/* Answer Section (Collapsible) */}
                <div
                  className={`overflow-hidden transition-max-height duration-300 ease-in-out ${openIndex === index ? "max-h-40 mt-2" : "max-h-0"
                    }`}
                >
                  <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <NewsletterSection />
      </div>
    </section>
  );
};

export default SeoServices;
