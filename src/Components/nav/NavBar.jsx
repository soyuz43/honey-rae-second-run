import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <ul className="navbar">
      <li className="navbar-item">
        <Link to="/tickets">TICKETS</Link>
      </li>
      <li className="navbar-item">
        <Link to="/customers">CUSTOMERS</Link>
      </li>
      <li className="navbar-item">
        <Link to="/employees">EMPLOYEES</Link>
      </li>
    </ul>
  );
};
