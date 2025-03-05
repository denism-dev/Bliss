// src/components/BlogSection.js

import React from "react";
import { blogPosts } from "../Utils/constants";

const BlogSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            From the blog
          </h1>
          <p className="max-w-lg mx-auto mt-4 text-gray-500">
            Salami mustard spice tea fridge authentic Chinese food dish salt tasty liquor. Sweet savory foodtruck pie.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <div key={post.id}>
              <div className="relative">
                <img
                  className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                  src={post.image}
                  alt={post.title}
                />

                <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
                  <img
                    className="object-cover object-center w-10 h-10 rounded-full"
                    src={post.authorImage}
                    alt={post.authorName}
                  />

                  <div className="mx-4">
                    <h1 className="text-sm text-gray-700 dark:text-gray-200">{post.authorName}</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{post.authorRole}</p>
                  </div>
                </div>
              </div>

              <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">{post.title}</h1>
              <hr className="w-32 my-6 text-blue-500" />
              <p className="text-sm text-gray-500 dark:text-gray-400">{post.description}</p>

              <a href={post.link} className="inline-block mt-4 text-blue-500 !text-blue-500 underline hover:text-blue-400">
  Read more →
</a>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
