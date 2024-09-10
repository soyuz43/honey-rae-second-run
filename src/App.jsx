// App.jsx

import "./app.css";
import { CustomerList } from "./Components/customers/customersList";
import { TicketList } from "./Components/tickets/TicketList";

export const App = () => {
  return <>
  <TicketList /> 
  <CustomerList />
  </>;
};
