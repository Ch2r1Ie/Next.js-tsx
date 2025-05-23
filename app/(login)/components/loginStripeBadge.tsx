"use client";

import Link from "next/link";
import { useState, FormEvent, useEffect } from "react";

interface AuthFormProps {
  mode: "Signup" | "Login";
  resetForm?: boolean;
}

const LoginStripeBadge: React.FC<AuthFormProps> = ({ mode, resetForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (resetForm) {
      setEmail("");
      setPassword("");
    }
  }, [resetForm]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h2 className="text-gray-950 text-3xl mb-2 text-center">{mode}</h2>
      <div>
        <label className="text-gray-950 dark:text-gray-300">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 p-3 w-full text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 hover:border-2 hover:border-blue-600"
        />
      </div>
      <div>
        <label className="text-gray-950 dark:text-gray-300 text-left flex items-center justify-between">
          <p>Password</p>
          <Link href="/password/forgotten">
            <p className="text-blue-700 hover:underline">
              Forgot your password?
            </p>
          </Link>
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-1 p-3 w-full text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 hover:border-2 hover:border-blue-600"
        />
      </div>
      <div className="mt-4 flex items-center">
        <input
          type="checkbox"
          className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2"
        />
        <label className="ml-2 text-sm text-gray-600 dark:text-gray-300">
          Remember me on this device
        </label>
      </div>
      <div className="mt-8">
        <button
          type="submit"
          className="w-full py-2 mb-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Sign in
        </button>

        <div className="flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <Link href="/password/signup">
          <button className="mt-4 mb-4 w-full py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 dark:bg-emerald-700 dark:hover:bg-emerald-600">
            Create New Account
          </button>
        </Link>
      </div>
    </form>
  );
};

export default LoginStripeBadge;
