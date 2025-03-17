import React from "react";

const StripeSecurityNotice: React.FC = () => {
  return (
    <div className="mt-5 p-6 rounded-lg w-full max-w-md">
      <div className="flex items-start space-x-3">
        <div>
          <p className="text-sm text-gray-800 dark:text-gray-400 mt-1">
            never share your credentials.If multiple people need access to your
            account, invite them as team members in{" "}
            <a
              href="https://dashboard.stripe.com/settings/team"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              settings
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default StripeSecurityNotice;
