// Ticket.jsx

import { useState } from "react";



export const Ticket = ({ ticket }) => {
const [employees, setEmployees] = useState([])
const [assigniedEmployee, setAssignedEmployee] = useState = ({})

  return (
    <section className="ticket" key={ticket.id}>
      <header className="ticket-info">#{ticket.id}</header>
      <div>{ticket.description}</div>
      <footer>
        <div>
          <div className="ticket-info">emergency</div>
          <div>{ticket.emergency ? "yes" : "no"}</div>
        </div>
      </footer>
    </section>
  );
};