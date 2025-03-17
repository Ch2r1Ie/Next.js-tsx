"use client";
import LoginFacebookBadge from "../components/loginFacebookBadge";

const Login: React.FC = () => {
  const isSuccessful = false;

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
      </div>
    </div>
  );
};

export default Login;
