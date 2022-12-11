import React, { useState, useEffect } from "react";

function DeleteHook(props) {
  return (
    <button
      className="ml-2 px-4 py-1 text-sm text-red-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
      onClick={(e) => {
        fetch(
          "https://63545c47ccce2f8c0207b3d7.mockapi.io/api/v1/employees/" +
            props.id,
          {
            method: "DELETE",
          }
        );
        return this.state.employees;
      }}
    >
      Delete
    </button>
  );
}

export default DeleteHook();
