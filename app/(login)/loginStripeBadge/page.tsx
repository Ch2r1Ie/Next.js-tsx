"use client";
import { useState } from "react";
import LoginStripeBadge from "../components/loginStripeBadge";
import StripeSecurityNotice from "../components/stripeSecurityNotice";
import StripeFooter from "../components/stripeFooter";

const Login: React.FC = () => {
  const [message, setMessage] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleLogin = async (data: { email: string; password: string }) => {
    const res = await fetch("/api/auth/password/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    setMessage(result.message);

    if (res.status === 200) {
      setIsSuccessful(true);
      setIsSuccess(true);
    } else {
      setIsSuccess(false);
    }
  };

  return (
    <div className="min-h-screen min-w-[300px] overflow-auto">
      <div
        className="flex flex-col items-center mt-30"
        style={
          {
            // backgroundImage: "url('/assets/sea-background.jpg')",
            // backgroundSize: "cover",
            // backgroundRepeat: "repeat-y",
          }
        }
      >
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-2xl w-full max-w-md">
          {isSuccessful ? (
            <p className="text-green-500 text-center text-lg font-semibold">
              Welcome!
            </p>
          ) : (
            <div>
              <LoginStripeBadge mode="Login" onSubmit={handleLogin} />
            </div>
          )}
        </div>
        <div className="p-6  w-full max-w-md">
          <StripeSecurityNotice />
        </div>
      </div>
      <div>
        <StripeFooter />
      </div>
    </div>
  );
};

export default Login;
