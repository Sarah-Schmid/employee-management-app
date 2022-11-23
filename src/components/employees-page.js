import "../index.css";
import Employee from "./employee";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "./add-employee";

function EmployeesPage() {
  const [employees, setEmployees] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  function updateEmployee(id, newName, newRole, newImg) {
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        return { ...employee, name: newName, role: newRole, img: newImg };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }

  useEffect(() => {
    setTimeout(() => {
      fetch("https://63545c47ccce2f8c0207b3d7.mockapi.io/api/v1/employees")
        .then((res) => {
          if (!res.ok) {
            // error coming back from server
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setIsLoading(false);
          setEmployees(data);
          setError(null);
        })
        .catch((err) => {
          // auto catches network / connection error
          setIsLoading(false);
          setError(err.message);
        });
    }, 600);
  }, []);

  const showEmployees = true;
  return (
    <div className="employees-list">
      {showEmployees ? (
        <div>
          {isLoading && <div>Loading...</div>}
          {employees && (
            <div className="flex flex-wrap justify-center">
              {employees.map((employee) => {
                return (
                  <Employee
                    key={employee.id}
                    id={employee.id}
                    name={employee.name}
                    role={employee.role}
                    img={employee.img}
                    updateEmployee={updateEmployee}
                  />
                );
              })}
            </div>
          )}
          <AddEmployee newEmployee={newEmployee} />
        </div>
      ) : (
        <p>You do not have access</p>
      )}
    </div>
  );
}

export default EmployeesPage;
