"use client";

import Link from "next/link";
import { useState, FormEvent, useEffect } from "react";

interface AuthFormProps {
  mode: "Signup" | "Login";
  onSubmit: (data: { email: string; password: string }) => void;
  resetForm?: boolean;
}

const LoginFacebookBadge: React.FC<AuthFormProps> = ({
  onSubmit,
  resetForm,
}) => {
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
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold mb-4 text-center">
        See more on Facebook!
      </h2>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder={!email ? "Email address or phone number" : ""}
          onFocus={(e) => (e.target.placeholder = "")}
          onBlur={(e) =>
            (e.target.placeholder = !email
              ? "Email address or phone number"
              : "")
          }
          className="mt-1 p-3 w-full text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 hover:border-2 hover:border-b-black"
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder={!password ? "Password" : ""}
          onFocus={(e) => (e.target.placeholder = "")}
          onBlur={(e) => (e.target.placeholder = !password ? "Password" : "")}
          className="mt-1 p-3 w-full text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 hover:border-2 hover:border-b-black"
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 font-bold text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Login
        </button>
        <Link href="/password/forgotten">
          <p className="text-center text-blue-500 font-bold py-4 hover:underline hover:underline-offset-2">
            Forgotten password?
          </p>
        </Link>
        <div className="flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <button className="mt-4 mb-4 w-full py-2 bg-emerald-500 font-bold text-white rounded-md hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 dark:bg-emerald-700 dark:hover:bg-emerald-600">
          Create New Account
        </button>
      </div>
    </form>
  );
};

export default LoginFacebookBadge;
