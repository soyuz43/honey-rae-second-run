import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCustomerByUserId } from "../../services/customerServices"; 


export const CustomerDetails = () => {
  const { customerId } = useParams(); // Get the customerId from the URL
  const [customer, setCustomer] = useState({}); // State to store customer data

  useEffect(() => {
    getCustomerByUserId(customerId).then((data) => {
      const customerObj = data[0]
    setCustomer(customerObj)
    })
  }, [customerId]);

  if (!customer) return <p>Loading customer details...</p>; // Handle loading state

  return (
    <section className="customer">
      <header className="customer-header">{customer.user?.fullName}</header>
      <div>
        <span className="customer-info"> Email : </span>
        {customer.user?.email}
      </div>
      <div>
        <span className="customer-info"> Address : </span>
        {customer.address}
      </div>
      <div>
        <span className="customer-info"> Phone Number : </span>
        {customer.phoneNumber}
      </div>
    </section>
  );
};
