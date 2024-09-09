import { useEffect, useState } from "react";
import { getAllTickets } from "../../services/ticketServices";
import { Ticket } from "./Ticket";
import "./tickets.css";
import { TicketFilterBar } from "./TicketFilterBar";

export const TicketList = () => {
  const [allTickets, setAllTickets] = useState([]);
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getAllTickets().then((ticketsArray) => {
      setAllTickets(ticketsArray);
    });
  }, []);
  useEffect(() => {
    const foundTickets = allTickets.filter((ticket) => {
      return ticket.description.toLowerCase().trim().includes(searchTerm.toLowerCase().trim());
    });
    setFilteredTickets(foundTickets)
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
          <TicketFilterBar setShowEmergencyOnly={setShowEmergencyOnly} setSearchTerm={setSearchTerm}/>
        <article className="tickets">
          {filteredTickets.map((ticketObj) => {
            return <Ticket ticket={ticketObj} name="Joe" key={ticketObj.id} />;
          })}
        </article>
      </div>
    </>
  );
};
