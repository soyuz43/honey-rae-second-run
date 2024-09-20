import "./app.css";
import { CustomerList } from "./Components/customers/customersList";
import { TicketList } from "./Components/tickets/TicketList";
import { EmployeeList } from "./Components/employees/EmployeesList";
import { Route, Routes, Outlet } from "react-router-dom";
import { NavBar } from "./Components/nav/NavBar";
import { Welcome } from "./Components/welcome/Welcome";
import { CustomerDetails } from "./Components/customers/CustomerDetail";
import { EmployeeDetails } from "./Components/employees/EmployeeDetails";

export const App = () => {
  return (
    
      
    <Routes>
    <Route 
      path="/"
      element={
        <>
        <NavBar />
        <Outlet />
        </>
        }
        >
          <Route index element={<Welcome />} />
          <Route path="/tickets" element={<TicketList />} />
          <Route path="/employees">
          <Route index element={<EmployeeList />} />
          <Route path=":employeeId" element={<EmployeeDetails />} />
          </Route>
          <Route path="/customers">
          <Route index element={<CustomerList />} />
          <Route path=":customerId" element={<CustomerDetails />} />
          </Route>
        </Route>
      </Routes>
    
  );
};