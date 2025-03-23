import React from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaCube } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#E6E6FA] p-6">
      <div className="flex flex-col md:flex-row w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-full md:w-1/2 p-6 md:p-8">
          <div className="flex items-center mb-6">
            <span className="font-bold text-xl flex items-center">
              <FaCube className="mr-2 size-5" /> TheCube Factory
            </span>
          </div>
          <h2 className="text-2xl font-semibold mb-4">Welcome back</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-indigo-600"
                />
                <span className="ml-2 text-sm text-gray-600">
                  Remember for 30 days
                </span>
              </label>
              <a className="text-sm font-bold text-indigo-600 hover:text-indigo-800 cursor-pointer">
                Forgot password?
              </a>
            </div>
            <button className="bg-[#6A5ACD] text-white font-bold py-2 px-4 rounded w-full hover:bg-[#483D8B] focus:ring-2 focus:ring-indigo-500">
              Sign in
            </button>
            <button className="mt-4 bg-white border border-gray-400 text-gray-700 font-bold py-2 px-4 rounded w-full flex items-center justify-center hover:border-gray-600 focus:ring-2 focus:ring-gray-300">
              <FcGoogle className="mr-2 size-5" />
              <span>Sign in with Google</span>
            </button>
          </form>
          <p className="text-center mt-4">
            Don't have an account?{" "}
            <span className="font-bold text-indigo-600 hover:text-indigo-800 cursor-pointer">
              Sign up
            </span>
          </p>
        </div>
        <div className="hidden md:block md:w-1/2 relative">
          <Image
            src="/assets/abstract-pop.jpg"
            alt="Abstract Pop"
            layout="fill"
            objectFit="cover"
            className="rounded-r-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
