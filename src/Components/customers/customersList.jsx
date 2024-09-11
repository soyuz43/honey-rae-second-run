import { useEffect } from "react";
import { useState } from "react";
import { getNonStaffUsers } from "../../services/userServices";
import "./Customers.css"
import { User } from "../users/User";

export const CustomerList = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        getNonStaffUsers().then((customerArray) => {
            setCustomers(customerArray);
        });
    }, []);

    return (
        <div className="customers">
            {customers.map((customerObj,) => {
                return (
                    <User user={customerObj}/>
                );
            })}
        </div>
    );
};



