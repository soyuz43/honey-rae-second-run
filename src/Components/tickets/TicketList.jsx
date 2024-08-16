import { useEffect, useState } from "react";
import { getAllTickets } from "../../services/ticketServices";
import { Ticket } from "./Ticket";
import "./tickets.css";

export const TicketList = () => {
  const [allTickets, setAllTickets] = useState([]);
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false);
  const [filteredTickets, setFilteredTickets] = useState([]);

  useEffect(() => {
    getAllTickets().then((ticketsArray) => {
      setAllTickets(ticketsArray);
    });
  }, []);

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
        <h2>Tickets</h2>
        <div>
          <button
            className="filter-btn btn-primary"
            onClick={() => setShowEmergencyOnly(true)}
          >
            Emergency
          </button>
          <button
            className="filter-btn btn-secondary"
            onClick={() => setShowEmergencyOnly(false)}
          >
            Show All
          </button>
        </div>
        <article className="tickets">
          {filteredTickets.map((ticketObj) => {
            return ( <Ticket ticket={ticketObj}/>            
            );
          })}
        </article>
      </div>
    </>
  );
};
