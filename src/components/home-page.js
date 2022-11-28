import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h1 className="center text-purple-700 mt-8">
        Welcome to Your Dashboard
        <span className="wave m-2">👋</span>
      </h1>
      <div className="center">
        <Link
          to="/calendar"
          className="no-underline ml-4 px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
        >
          Time Off Calendar
        </Link>
        <Link
          to="/employees"
          className="no-underline ml-4 px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
        >
          Employee List
        </Link>
      </div>
    </>
  );
}

export default HomePage;
