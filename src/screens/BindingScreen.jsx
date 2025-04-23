import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function getRedirectUrl(search) {
  const params = new URLSearchParams(search);
  return params.get("redirect") || "/";
}

export default function BindingScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectUrl = getRedirectUrl(location.search);

  const handleFinish = () => {
    // If redirect is absolute URL, use window.location; else use navigate
    if (/^https?:\/\//.test(redirectUrl)) {
      window.location.href = redirectUrl;
    } else {
      navigate(redirectUrl);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background px-6">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="bg-primary/10 rounded-full p-4 mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <div className="text-2xl font-bold text-primary mb-2">Binding Success</div>
        <div className="text-gray-700 text-center mb-8 max-w-xs">
          We successfully proceed your card binding
        </div>
      </div>
      <button
        className="w-full py-3 mb-6 rounded-lg bg-primary text-white text-lg font-semibold shadow-md hover:bg-blue-700 transition"
        onClick={handleFinish}
      >
        Finish
      </button>
    </div>
  );
}
