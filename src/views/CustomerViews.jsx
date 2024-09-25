import { Outlet, Route, Routes } from "react-router-dom";
import { Welcome } from "../Components/welcome/Welcome";
import { CustomerNav } from "../Components/nav/Customer_NavBar";
import { TicketList } from "../Components/tickets/TicketList";

export const CustomerViews = ( {currentUser }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
          <CustomerNav />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route path="tickets" element={<TicketList currentUser={currentUser}/>} />
      </Route>
    </Routes>
  );
};
