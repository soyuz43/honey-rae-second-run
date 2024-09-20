import "./app.css";

import { Route, Routes, } from "react-router-dom";
import { Login } from "./Components/auth/Login"
import { Register } from "./Components/auth/Register"
import { ApplicationViews } from "./views/ApplicationViews";
import { Authorized } from "./views/Authorized"

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      <Route path="*" element={
        <Authorized>
          <ApplicationViews />
        </Authorized>
      }
      />
    </Routes>
  );
};
