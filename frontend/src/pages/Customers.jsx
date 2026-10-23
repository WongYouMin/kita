import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom"
function Customers() {
    // ==========================================
    // States
    // ==========================================
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [customers, setCustomers] = useState([]);

    // ==========================================
    // Data Loader
    // ==========================================

    // Load customers data
    const loadCustomersData = async() => {
        setLoading(true);
        setError("");

        try {
            await getCustomers();
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    // ==========================================
    // Event Handler
    // ==========================================

    // Handle delete customer
    const handleDeleteCustomer = async(customerId) => {
        const deleteConfirmation = window.confirm("Delete this customer?");

        if(!deleteConfirmation){
            return;
        }

        setLoading(true);
        setError("");
        try {
            await deleteCustomer(customerId);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    // ==========================================
    // API Functions
    // ==========================================

    // Fetch customers data
    const getCustomers = async() => {
        const api = 'https://dummyjson.com/users';
        const response = await fetch(api);
        if(!response.ok){
            throw new Error(`Failed to fetch customers with error code ${response.status}`);
        }
        const customersResponse = await response.json();
        setCustomers(customersResponse.users);
    };

    // Delete a customer
    const deleteCustomer = async(customerId) => {
        const api = `https://dummyjson.com/users/${customerId}`;
        const response = await fetch(api, {
            method: 'DELETE'
        });
        if(!response.ok){
            throw new Error(`Failed to delete the customers with error code ${response.status}`);
        }
        const deleteResponse = await response.json();
        setCustomers(previous => {
            return previous.filter(customer => customer.id !== deleteResponse.id);
        });
    };

    // ==========================================
    // Effect
    // ==========================================

    // Load customers data when component mounts
    useEffect(() => {
        loadCustomersData();
    }, []);

    // ==========================================
    // Render
    // ==========================================
    return(
        <>
            <>
                <h1>Customers</h1>
                <Outlet
                    // customers, setCustomers: shared states used for CustomerList and CustomerNew
                    // loading, setLoading, error, setError: control states in CustomerList 
                    context={
                        {
                            loading,
                            setLoading,
                            error,
                            setError,
                            customers, 
                            setCustomers,
                            handleDeleteCustomer
                        }
                    }
                />
            </>
        </>
    )
}

export default Customers;