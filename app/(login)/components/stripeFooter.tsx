import React from "react";

const StripeFooter: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen pb-16">
      {" "}
      <div className="flex-grow"></div>
      <footer className="fixed bottom-0 left-0 w-full py-4 pl-10">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          © Company.Co.th
          <span className="mx-2">|</span>
          <a href="" className="text-blue-600 hover:underline">
            Privacy
          </a>
          <span className="mx-2">|</span>
          <a href="" className="text-blue-600 hover:underline">
            Terms
          </a>
        </p>
      </footer>
    </div>
  );
};

export default StripeFooter;
