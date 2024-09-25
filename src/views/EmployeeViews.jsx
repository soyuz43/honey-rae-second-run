import { Welcome } from "../Components/welcome/Welcome";
import { CustomerDetails } from "../Components/customers/CustomerDetail";
import { EmployeeDetails } from "../Components/employees/EmployeeDetails";
import { CustomerList } from "../Components/customers/customersList";
import { TicketList } from "../Components/tickets/TicketList";
import { EmployeeList } from "../Components/employees/EmployeesList";
import { EmployeeForm } from "../Components/forms/EmployeeEdit";
import { Outlet, Route, Routes } from "react-router-dom";
import { EmployeeNav } from "../Components/nav/Employee_NavBar";



export const EmployeeViews = ( {currentUser} ) => {
    return (
        <Routes>
        <Route
          path="/"
          element={
            <>
              <EmployeeNav />
              <Outlet />
            </>
          }
        >
          <Route index element={<Welcome />} />
          <Route
            path="/tickets"
            element={<TicketList currentUser={currentUser} />}
          />
          <Route path="/employees">
            <Route index element={<EmployeeList />} />
            <Route path=":employeeId" element={<EmployeeDetails />} />
          </Route>
          <Route path="/customers">
            <Route index element={<CustomerList />} />
            <Route path=":customerId" element={<CustomerDetails />} />
          </Route>
          <Route
            path="profile"
            element={<EmployeeForm currentUser={currentUser} />}
          />
        </Route>
      </Routes>

    )
}