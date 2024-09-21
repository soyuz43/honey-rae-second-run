import { Route, Routes, Outlet } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { NavBar } from "../Components/nav/NavBar";
import { Welcome } from "../Components/welcome/Welcome";
import { CustomerDetails } from "../Components/customers/CustomerDetail";
import { EmployeeDetails } from "../Components/employees/EmployeeDetails";
import { CustomerList } from "../Components/customers/customersList";
import { TicketList } from "../Components/tickets/TicketList";
import { EmployeeList } from "../Components/employees/EmployeesList";


export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect (() => {
    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)

    setCurrentUser(honeyUserObject)
  }, [])

  
  return <Routes>
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
  <Route path="/tickets" element={<TicketList currentUser={currentUser} />} />
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
}
