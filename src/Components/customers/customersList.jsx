import { useEffect } from "react";
import { useState } from "react";
import { getNonStaffUsers } from "../../services/userServices";
import "./Customers.css"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        getNonStaffUsers().then((customerArray) => {
            setCustomers(customerArray);
        });
    }, []);

    return (
        <div className="customers">
            {customers.map((customerObj, index) => {
                return (
                    <div key={index}>
                        <div>
                            <div>
                                <div>Name</div>
                                <div>{customerObj.fullName}</div>
                            </div>
                            <div>
                                <div>Email</div>
                                <div>{customerObj.email}</div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};



