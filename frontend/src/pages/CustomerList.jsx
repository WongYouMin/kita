import { useNavigate, useOutletContext } from "react-router-dom";

import { useState, useEffect } from "react";
import CustomerItem from "../components/CustomerItem";
function CustomerList() {
    // ==========================================
    // States
    // ==========================================
    const {loading, setLoading, error, setError, customers, setCustomers, handleDeleteCustomer} = useOutletContext(); 
    const navigate = useNavigate();
 
    // ==========================================
    // Event Handler
    // ==========================================

    // Navigate to new customer page
    const navigateToAddCustomer = () => {
        navigate('/customers/new');
    };

    // Navigate to customer details page
    const navigateToCustomerDetails = (customerId) => {
        navigate(`/customers/${customerId}`);
    }

    // ==========================================
    // Render
    // ==========================================
    return (
        <>
            <div className="customer-list">
                <div className="customers-header">
                    <button onClick={navigateToAddCustomer}>
                        Add Customer
                    </button>
                </div>
                <div className="customer-list-header">
                    <p>ID</p>
                    <p>Username</p>
                    <p>Name</p>
                    <p>Points</p>
                    <p>Actions</p>
                </div>
                {
                    loading
                        ? <p>Loading...</p>
                        : error.trim()
                            ? <p>Error: {error}</p>
                            : customers.length > 0
                                ? (customers.map(({id, firstName, lastName, username, weight}) => {
                                    return (
                                        <CustomerItem
                                            key={id}
                                            customerId={id}
                                            customerName={firstName + ' ' + lastName}
                                            username={username}
                                            weight={weight}
                                            navigateToCustomerDetails={navigateToCustomerDetails}
                                            handleDeleteCustomer={handleDeleteCustomer}
                                        />
                                    )
                                })
                                )
                                : <p>No customers found.</p>
                }
            </div>
        </>
    )
}

export default CustomerList;