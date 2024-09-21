import { useEffect, useState } from "react";
import { getStaffUsers } from "../../services/userServices";
import { Link } from "react-router-dom";
import { User } from "../users/User";
import "./Employee.css"


export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getStaffUsers().then((employeeArray) => {
      setEmployees(employeeArray);
    });
  }, []);

  return (
    <div className="employees">
      <h2>Staff</h2>
      {employees.map((employee) => (
        <Link key={employee.id} to={`/employees/${employee.id}`}>
          <User user={employee} />
        </Link>
      ))}
    </div>
  );
};
