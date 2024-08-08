// App.jsx
import { useEffect, useState } from "react";
import { getAllTickets } from "./services/ticketServices";

export const App = () => {
  const [count, setCount] = useState(0)
  const [allTickets, setAllTickets] = useState([])
  useEffect(() => {
    getAllTickets().then(ticketsArray =>{
      setAllTickets(ticketsArray)
      console.log("Tickets Set")
    })
  }, [])



  const handlebuttonclick = () => {
  setCount (count + 1)
  console.log("clicked me ouch!")
  }

  return (
    <>
      {""}
      <div>
        <h1>Hello!! :: </h1>
        <div>Welcome to your first React Application!</div>
        <button onClick={handlebuttonclick} className="btn-secondary">CLICK ME IF YOU DARE</button>
        <div>COUNT {count}</div>
      </div>
    </>
  );
};
