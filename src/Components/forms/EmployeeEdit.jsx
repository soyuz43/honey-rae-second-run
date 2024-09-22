import { useEffect, useState } from "react";
import "./Form.css";
import { getEmployeeByUserId, updateEmployee } from "../../services/employeeServices";
import { useNavigate } from "react-router-dom";
export const EmployeeForm = ( {currentUser} ) => {
  const [employee, setEmployee] = useState({});

  const navigate = useNavigate()

  useEffect(() => {
    getEmployeeByUserId(currentUser.id).then((data) => {
      const employeeObj = data[0];
      setEmployee(employeeObj);
    });
  }, [currentUser]);

  const handleSave = (event) => {
    event.preventDefault()
    console.log("clicked")

    const editedEmployee = {
        id: employee.id,
        specialty: employee.specialty,
        rate: employee.rate,
        userId: employee.userId,
    }

    updateEmployee(editedEmployee).then(() => {
        navigate(`/employees/${currentUser.id}`)
    })
  }
  return (
    <form className="profile">
      <h2>Update Profile</h2>
      <fieldset>
        <div className="form-group">
          <label>Speciality:</label>
          <input
            type="text"
            value={employee.specialty}
            onChange={(e) => {
                const copy = { ...employee }
                copy.specialty = e.target.value
                setEmployee(copy)
            }}
            required
            className="form-control"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Hourly Rate:</label>
          <input
            type="number"
            value={employee.rate}
            onChange={(e) => {
                const copy = { ...employee }
                copy.rate = e.target.value
                setEmployee(copy)
            }}
            required
            className="form-control"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <button className="form-btn btn-primary" onClick={handleSave}>
            Submit (Save Profile)
          </button>
        </div>
      </fieldset>
    </form>
  );
};
