"use client";
// import { useState } from "react";
import LoginFacebookBadge from "../components/loginFacebookBadge";

const Login: React.FC = () => {
  // const [message, setMessage] = useState("");
  // const [isSuccessful, setIsSuccessful] = useState(false);
  // const [isSuccess, setIsSuccess] = useState(false);

  // const handleLogin = async (data: { email: string; password: string }) => {
  //   const res = await fetch("/api/auth/password/login", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(data),
  //   });
  //   const result = await res.json();
  //   setMessage(result.message);

  //   if (res.status === 200) {
  //     setIsSuccessful(true);
  //     setIsSuccess(true);
  //   } else {
  //     setIsSuccess(false);
  //   }
  // };

  const isSuccessful = true;

  return (
    <div className="flex items-center justify-center min-h-screen min-w-[300px] bg-gray-100 dark:bg-gray-900 overflow-auto">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md">
        {isSuccessful ? (
          <p className="text-green-500 text-center text-lg font-semibold">
            Welcome!
          </p>
        ) : (
          <>
            <LoginFacebookBadge mode="Login" />
          </>
        )}
        {/* {message && (
          <p
            className={`text-center mt-4 ${
              isSuccess ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )} */}
      </div>
    </div>
  );
};

export default Login;
