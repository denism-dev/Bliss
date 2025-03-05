import React from "react";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <div className="text-center">
          <img
            src="https://d1o1snbcxjzntq.cloudfront.net/oneiam-header-logo.svg"
            alt="Careerbuilder"
            className="mx-auto mb-4"
          />
          <h1 className="text-xl font-semibold">Welcome back!</h1>
          <p className="text-gray-600">Better jobs and higher pay are waiting. Sign in and find your next move.</p>
        </div>
        
        <form className="mt-6">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm text-gray-700">Stay Signed In</span>
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">Don't have an account? <a href="#" className="text-blue-600 hover:underline">Create One Now</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
