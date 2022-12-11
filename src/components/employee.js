import EditEmployee from "./edit-employee";
import { useState, useEffect } from "react";
import deleteHook from "../hooks/delete-hook";

function Employee(props) {
  const [employees, setEmployees] = useState([]);

  return (
    <>
      <div className="min-w-[400px] max-w-[400px] m-2 py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img
          className="object-cover rounded-full h-[100px] w-[100px] block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
          src={props.img}
          alt="Employee image"
        />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
              {props.name ? props.name : "No name."}
            </p>
            <p className="text-slate-500 font-medium">
              {props.role ? props.role : "No role."}
            </p>
          </div>

          <EditEmployee
            id={props.id}
            name={props.name}
            role={props.role}
            img={props.img}
            updateEmployee={props.updateEmployee}
          />
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
        </div>
      </div>
    </>
  );
}

export default Employee;
