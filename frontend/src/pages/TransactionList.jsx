import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import TransactionItem from "../components/TransactionItem";
function TransactionList(){
    // ==========================================
    // States
    // ==========================================
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [transactions, setTransactions] = useState([]);
    const navigate = useNavigate();

    // ==========================================
    // Data Loader
    // ==========================================

    // Load transactions data
    const loadTransactionsData = async() => {
        setLoading(true);
        setError("");
        try {
            await getTransactionsData();
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    // ==========================================
    // Event Handler
    // ==========================================

    // Navigate to award points page
    const navigateToAwardPoints = () => {
        navigate("/transactions/awardPoints");
    };

    // Navigate to redeem reward page
    const navigateToRedeemReward = () => {
        navigate("/transactions/redeemReward");
    };

    // ==========================================
    // API Functions
    // ==========================================

    // Fetch and process transactions data
    const getTransactionsData = async() => {
        const api = 'http://localhost:3000/api/transactions';
        const response = await fetch(api);
        if(!response.ok){
            throw new Error(`Failed to fetch transactions with error code: ${response.status}`);
        }
        const transactionsResponse = await response.json();
        setTransactions(transactionsResponse);
    };

    // ==========================================
    // Effects
    // ==========================================

    // Load transactions data when component mounts.
    useEffect(() => {
        loadTransactionsData();
    }, []);

    // ==========================================
    // Render
    // ==========================================
    return(
        <>
            <div className="transactions-header">
                <button onClick={navigateToAwardPoints}>Award Points</button>
                <button onClick={navigateToRedeemReward}>Redeem Reward</button>
            </div>
            <div className="transaction-list">
                <div className="transaction-list-header">
                    <p>Created At</p>
                    <p>Customer</p>
                    <p>Type</p>
                    <p>Points</p>
                </div>
                    {
                        loading
                            ? <p>Loading...</p>
                            : error.trim()
                                ? <p>Error: {error}</p>
                                : transactions.length > 0
                                    ? transactions.map(({_id, customerDetails, type, points, createdAt}) => {
                                        return (
                                            <TransactionItem
                                                key={_id}
                                                customerDetails={customerDetails}
                                                type={type}
                                                points={points}
                                                createdAt={createdAt}      
                                            />
                                        )})
                                    : <p>No transactions found.</p>
                    }
            </div>
        </>
    )
}

export default TransactionList;