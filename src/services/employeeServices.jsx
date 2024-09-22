export const getAllEmployees = () => {
  return fetch(`http://localhost:8088/employees?_expand=user`).then((res) =>
    res.json()
  );
};
export const getEmployeeByUserId = async (employeeId) => {
  try {
    const response = await fetch(
      `http://localhost:8088/employees?userId=${employeeId}&_expand=user&_embed=employeeTickets`
    );
    const data = await response.json();

    console.log("Employee Data:", data);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const updateEmployee = (employee) => {
  return fetch(`http://localhost:8088/employees/${employee.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  });
};
