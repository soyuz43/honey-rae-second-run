// App.jsx
import { useEffect, useState } from "react";
import { getAllTickets } from "./services/ticketServices";
import "./app.css"

export const App = () => {
  // const [count, setCount] = useState(0)
  const [allTickets, setAllTickets] = useState([])
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
  
  
  useEffect(() => {
    getAllTickets().then(ticketsArray =>{
      setAllTickets(ticketsArray)
      console.log("Tickets Set")
    })
  }, [])

useEffect (() => {
  if (showEmergencyOnly) {
    const emergencyTickets = allTickets.filter(ticket => ticket.emergency === true
    )
    setAllTickets(emergencyTickets)
  } 
},[showEmergencyOnly])



  return (
    <>
      <div className="tickets-container">
        <h2>Tickets</h2>
        <div>
          <button className="filter-btn btn-primary" onClick={() => (setShowEmergencyOnly(true)) }>Emergency</button>
          <button className="filter-btn bte-secondary" onClick={() => (setShowEmergencyOnly(false))}>Show All</button>
        </div>
        <article className="tickets">
          {allTickets.map(ticket => {
            return (
              <section className="ticket" key={ticket.id}>
                <header className="ticket-info"> #{ticket.id}</header>
                <div>{ticket.description}</div>
                <footer>
                  <div>
                    <div className="ticket-info">emergency</div>
                    <div>{ticket.emergency ? "yes" : "no" }</div>
                  </div>
                </footer>
              </section>
            )
          })}
        </article>
      </div>
    </>
  );
};
