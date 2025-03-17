import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaCube } from "react-icons/fa";

const Login = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#E6E6FA] overflow-auto">
      <div className="flex w-3/4 max-w-3xl bg-white rounded-lg shadow-lg min-w-[400px] overflow-auto">
        <div className="w-full md:w-1/2 p-8">
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm mb-2 "
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outlin"
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
              <a className="inline-block align-baseline font-bold text-sm text-indigo-600 hover:text-indigo-800">
                Forgot password
              </a>
            </div>
            <button className="bg-[#6A5ACD] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-4 hover:bg-[#483D8B] hover:border-zinc-800">
              Sign in
            </button>
            <button className="bg-white border border-gray-400 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full flex items-center justify-center space-x-2 hover:border-zinc-800">
              <FcGoogle className="mr-2 size-5"></FcGoogle>
              <span>Sign in with Google</span>
            </button>
          </form>

          <p className="text-center mt-4">
            Don't have an account?{" "}
            <a className="font-bold text-indigo-600 hover:text-indigo-800">
              Sign up
            </a>
          </p>
        </div>
        <div className="w-0 md:w-1/2 relative overflow-hidden hidden md:block">
          <div className="absolute inset-0 bg-purple-200 opacity-100">
            <img
              src="assets/abstract-pop.jpg"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
