"use client";

import LoginStripeBadge from "../components/loginStripeBadge";
import StripeSecurityNotice from "../components/stripeSecurityNotice";
import StripeFooter from "../components/stripeFooter";

const Login: React.FC = () => {
  const isSuccessful = false;

  return (
    <div className="min-h-screen min-w-[300px] overflow-auto">
      <div className="flex flex-col items-center mt-30" style={{}}>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-2xl w-full max-w-md">
          {isSuccessful ? (
            <p className="text-green-500 text-center text-lg font-semibold">
              Welcome!
            </p>
          ) : (
            <div>
              <LoginStripeBadge mode="Login" />
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
