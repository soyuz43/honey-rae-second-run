import { useEffect, useState } from "react";
import { getAllTickets } from "../../services/ticketServices";
import { getAllEmployees } from "../../services/employeeServices.jsx";
import { Ticket } from "./Ticket";
import { TicketFilterBar } from "./TicketFilterBar";
import "./tickets.css";

export const TicketList = ({ currentUser }) => {
  const [allTickets, setAllTickets] = useState([]);
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [allEmployees, setAllEmployees] = useState([]);

  const getAndSetTickets = () => {
    getAllTickets().then((ticketsArray) => {
        // Ternary to determine what state to set to the tickets array
        const ticketsToSet = (currentUser.isStaff) 
            ? ticketsArray 
            : ticketsArray.filter(ticket => ticket.userId === currentUser.id);
        
        setAllTickets(ticketsToSet);
    });
    getAllEmployees().then((employeesArray) => {
        setAllEmployees(employeesArray);
    });
}

useEffect(() => {
    getAndSetTickets()
}, [currentUser]);


  useEffect(() => {
    getAllTickets().then((ticketsArray) => {
      setAllTickets(ticketsArray);
    });
  }, []);
  useEffect(() => {
    const foundTickets = allTickets.filter((ticket) => {
      return ticket.description
        .toLowerCase()
        .trim()
        .includes(searchTerm.toLowerCase().trim());
    });
    setFilteredTickets(foundTickets);
  }, [searchTerm, allTickets]);

  useEffect(() => {
    if (showEmergencyOnly) {
      const emergencyTickets = allTickets.filter((ticket) => ticket.emergency);
      setFilteredTickets(emergencyTickets);
    } else {
      setFilteredTickets(allTickets);
    }
  }, [showEmergencyOnly, allTickets]);

  return (
    <>
      <div className="tickets-container">
        <h2>Tickets!</h2>
        <TicketFilterBar
          setShowEmergencyOnly={setShowEmergencyOnly}
          setSearchTerm={setSearchTerm}
        />
        <article className="tickets">
          {filteredTickets.map((ticketObj) => {
            return (
              <Ticket
                ticket={ticketObj}
                currentUser={currentUser}
                getAndSetTickets={getAndSetTickets}
                key={ticketObj.id}
              />
            );
          })}
        </article>
      </div>
    </>
  );
};
