import "./index.css";
import Employee from "./components/employee";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "./components/add-employee";

function App() {
  const [employees, setEmployees] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        return { ...employee, name: newName, role: newRole };
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
    fetch("http://localhost:8000/employees")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setEmployees(data);
        setIsLoading(false);
      });
  }, []);

  const showEmployees = true;
  return (
    <div className="App">
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

export default App;
