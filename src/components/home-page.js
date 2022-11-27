import React from "react";
import "../index.css";

function HomePage() {
  return (
    <>
      <h1 className="center text-purple-500 mt-8">
        Welcome to Your Dashboard
        <span className="wave m-2">👋</span>
      </h1>
      <div className="center">
        <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          Time Off Calendar
        </button>
        <button className="ml-4 px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          Employee List
        </button>
      </div>
    </>
  );
}

export default HomePage;
