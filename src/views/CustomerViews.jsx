import { Outlet, Route, Routes } from "react-router-dom";
import { Welcome } from "../Components/welcome/Welcome";
import { CustomerNav } from "../Components/nav/Customer_NavBar";

export const CustomerViews = () => {
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
      </Route>
    </Routes>
  );
};
