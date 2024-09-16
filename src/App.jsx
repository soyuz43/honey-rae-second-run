// App.jsx

import "./app.css";
import { CustomerList } from "./Components/customers/customersList";
import { TicketList } from "./Components/tickets/TicketList";
import { EmployeeList } from "./Components/employees/EmployeesList";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./Components/nav/NavBar";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route path="/tickets" element={<TicketList />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/customers" element={<CustomerList />} />
      </Route>
    </Routes>
  );
};
