import { useEffect, useState } from "react";
import AwardPointsForm from "../components/AwardPointsForm";
import { useNavigate } from "react-router-dom";

function AwardPoints(){
    // ==========================================
    // States
    // ==========================================
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [loadingTransaction, setLoadingTransaction] = useState(false);
    const [transactionFormError, setTransactionFormError] = useState("");
    const [customers, setCustomers] = useState([]);
    const [transaction, setTransaction] = useState({
        customerId: "",
        points: ""
    });
    const navigate = useNavigate();

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

    // Handle changes made to transaction input
    const handleTransactionInputChange = (event) => {
        setTransaction(previous => {
            return {
                ...previous,
                [event.target.name] : event.target.value
            }
        })
    };

    // Navigate back to transactions list page
    const navigateBackToTransactions = () => {
        navigate('/transactions');
    };

    // Handle form submitted to award points
    const handleAwardPoints = async(event) => {
        event.preventDefault();

        setTransactionFormError("");
        const validationError = validateTransaction();

        if(validationError.trim()){
            setTransactionFormError(validationError);
        } else {
            setLoadingTransaction(true);
             try {
                await addLoyaltyPoints();
                clearTransactionForm();
                navigateBackToTransactions();
            } catch (error) {
                setTransactionFormError(error.message);
            } finally {
                setLoadingTransaction(false);
            }
        }
    };

    // Discard transaction form
    const discardTransactionForm = () => {
        clearTransactionForm();
        setError("");
        setTransactionFormError("");
        navigateBackToTransactions();
    };

    // ==========================================
    // API Functions
    // ==========================================

    // Fetch and process customers data
    const getCustomers = async() => {
        const api = 'http://localhost:3000/api/customers';
        const response = await fetch(api);
        if(!response.ok){
            throw new Error(`Failed to fetch customers with error code: ${response.status}`);
        }
        const data = await response.json();
        setCustomers(data);
    };

    // Award loyalty points
    const addLoyaltyPoints = async() => {
        const api = 'http://localhost:3000/api/transactions';
        const response = await fetch(api, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                customerId: transaction.customerId,
                type: 1,
                points: Number(transaction.points),
            })
        });
        if(!response.ok){
            throw new Error(`Failed to add loyalty points with error code: ${response.status}`);
        }
    };

    // ==========================================
    // Helper Functions
    // ==========================================

    // Validate transaction
    const validateTransaction = () => {
        let validationError = "";
        if(!transaction.customerId.trim()){
            validationError += "Customer is required. ";
        } 

        const points = Number(transaction.points);
        if(!Number.isFinite(points) || !Number.isInteger(points) || points <= 0){
            validationError += "Invalid loyalty points. Loyalty points must be a positive integer. ";
        }

        return validationError;
    };

    // Clear transaction form
    const clearTransactionForm = () => {
        setTransaction({
            customerId: "",
            points: ""
        });
    };

    // ==========================================
    // Effects
    // ==========================================

    // Load customers data when component mounts.
    useEffect(() => {
        loadCustomersData();
    }, []);

    // ==========================================
    // Render
    // ==========================================
    return(
        <>
         {
            loading
                ? <p>Loading...</p>
                : error.trim()
                    ? <p>Error: {error}</p>
                    : customers.length > 0
                        ? <AwardPointsForm
                            handleAwardPoints={handleAwardPoints}
                            transaction={transaction}
                            handleTransactionInputChange={handleTransactionInputChange}
                            loadingTransaction={loadingTransaction}
                            discardTransactionForm={discardTransactionForm}
                            transactionFormError={transactionFormError}
                            customers={customers}
                        />
                        : <p>No customers found</p>
        }
        
        </>
        
    )
}

export default AwardPoints;