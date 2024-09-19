import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEmployeeByUserId } from "../../services/employeeServices";

export const EmployeeDetails = () => {
  const { employeeId } = useParams(); // Get the employeeId from the URL
  const [employee, setEmployee] = useState({}); // State to store employee data

  useEffect(() => {
    getEmployeeByUserId(employeeId).then((data) => {
      const employeeObj = data[0];
      setEmployee(employeeObj);
    });
  }, [employeeId]);

  if (!employee) return <p>Loading employee details...</p>; // Handle loading state

  return (
    <section className="employee">
      <header className="employee-header">{employee?.fullName}</header>
      <div>
        <span className="employee-info">Email: </span>
        {employee?.email}
      </div>
      <div>
        <span className="employee-info">Rate: </span>
        {employee.rate}
      </div>
      <div>
        <span className="employee-info">Specialty: </span>
        {employee.specialty}
      </div>
    </section>
  );
};