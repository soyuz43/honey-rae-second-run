import "./app.css";
import { CustomerList } from "./Components/customers/customersList";
import { TicketList } from "./Components/tickets/TicketList";
import { EmployeeList } from "./Components/employees/EmployeesList";
import { Route, Routes, Outlet } from "react-router-dom";
import { NavBar } from "./Components/nav/NavBar";
import { Welcome } from "./Components/welcome/Welcome";

export const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Welcome />} />
          <Route path="/tickets" element={<TicketList />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/customers" element={<CustomerList />} />
        </Route>
      </Routes>
    </div>
  );
};