import { useEffect, useState } from "react";
import { getStaffUsers } from "../../services/userServices";
import { User } from "../users/User";

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
              <User user={employee} />
      ))}
    </div>
  );
};
    