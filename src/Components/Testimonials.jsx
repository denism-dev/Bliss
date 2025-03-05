// src/components/Testimonials.jsx
import React, { useRef } from 'react';
import testimonialsData from '../Utils/constants';

const Testimonials = () => {
  const scrollRef = useRef(null);

  // Function to handle horizontal scrolling
  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = 300;

    if (direction === 'left') {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="mt-6 md:flex md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
              What our clients are saying
            </h1>
          </div>

          <div className="flex justify-between mt-8 md:mt-0">
            <button
              onClick={() => scroll('left')}
              title="left arrow"
              className="p-2 mx-3 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700 hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={() => scroll('right')}
              title="right arrow"
              className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700 hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <section
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 scroll-smooth snap-x snap-mandatory mt-8"
        >
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`flex-shrink-0 w-80 p-8 border rounded-lg dark:border-gray-700 ${testimonial.bgColor} snap-center`}
            >
              <p className={`leading-loose ${testimonial.textColor}`}>
                {testimonial.text}
              </p>

              <div className="flex items-center mt-8 -mx-2">
                <img
                  className={`object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ${testimonial.ringColor}`}
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="mx-2">
                  <h1 className="font-semibold text-gray-800 dark:text-white">
                    {testimonial.name}
                  </h1>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default Testimonials;
