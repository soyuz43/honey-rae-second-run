import { useEffect, useState } from "react";
import { getAllTickets } from "../../services/ticketServices";
import { Ticket } from "./Ticket";
import { TicketFilterBar } from "./TicketFilterBar";
import "./tickets.css";

export const TicketList = ({ currentUser }) => {
  const [allTickets, setAllTickets] = useState([]);
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false);
  const [showOpenOnly, setShowOpenOnly] = useState(false)
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  const getAndSetTickets = () => {
    getAllTickets().then((ticketsArray) => {
      if (currentUser.isStaff) {
        setAllTickets(ticketsArray);
      } else {
        const customerTickets = ticketsArray.filter(
          (ticket) => ticket.userId === currentUser.id
        );
        setAllTickets(customerTickets);
      }
    });
  };



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

  useEffect (() => {
    if (showOpenOnly) 
      {const openTickets = allTickets.filter(ticket => ticket.dateCompleted === '')
        setFilteredTickets(openTickets)
      } else {
        setFilteredTickets(allTickets)
      }

  }, [showOpenOnly, allTickets])
  return (
    <>
      <div className="tickets-container">
        <h2>Tickets!</h2>
        <TicketFilterBar
          setShowEmergencyOnly={setShowEmergencyOnly}
          setShowOpenOnly={setShowOpenOnly}
          setSearchTerm={setSearchTerm}
          currentUser={currentUser}
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
