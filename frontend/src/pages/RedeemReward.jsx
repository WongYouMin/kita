import { useEffect, useState } from "react";
import RedeemRewardForm from "../components/RedeemRewardForm";
import { useNavigate } from "react-router-dom";
function RedeemReward(){
    // ==========================================
    // States
    // ==========================================
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [customers, setCustomers] = useState([]);
    const [rewards, setRewards] = useState([]);
    const [redeemableRewards, setRedeemableRewards] = useState([]);
    const [transaction, setTransaction] = useState({
        customerId: "",
        rewardId: "",
    });
    const [loadingTransaction, setLoadingTransaction] = useState(false);
    const [transactionFormError, setTransactionFormError] = useState("");
    const navigate = useNavigate();

    // ==========================================
    // Data Loader
    // ==========================================

    // Load customers and rewards data
    const loadFormData = async() => {
        setLoading(true);
        setError("");
        try {
            await getCustomers();
            await getRewards();
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    // ==========================================
    // Event Handler
    // ==========================================

    // Handle changes made at redeem reward form input
    const handleRedeemRewardInputChange = (event) => {
        setTransaction(previous => {
            return {
                ...previous,
                [event.target.name] : event.target.value
            };
        });
    };

    // Handle changes to the customer selection
    // to only display rewards that the selected customer can redeem
    const handleCustomerChange = (event) => {
        
        const selectedCustomer = customers.find((customer) => {
            return customer._id === event.target.value;
        });

        setTransaction(previous => {
            return {
                ...previous,
                "rewardId": "",
                [event.target.name]: event.target.value
            };
        });

        if(!selectedCustomer){
            setRedeemableRewards([]);
            return;
        }

        const redeemableRewards = rewards.filter((reward) => {
            return selectedCustomer.points >= reward.points
        });

        setRedeemableRewards(redeemableRewards);
    };

    // Handle form submitted to redeem reward
    const handleRedeemReward = async(event) => {
        event.preventDefault();
        setTransactionFormError("");
        const validationError = validateTransaction();

        if(validationError.trim()){
            setTransactionFormError(validationError);
            return;
        } else {
             setLoadingTransaction(true);
            try {
                await redeemReward();
                clearTransactionForm();
                navigateBackToTransactions();
            } catch (error) {
                setTransactionFormError(error.message);
            } finally {
                setLoadingTransaction(false);
            }
        }
    };

     // Navigate back to transactions list page
    const navigateBackToTransactions = () => {
        navigate('/transactions');
    };

    // Discard transaction form
    const discardTransactionForm = () => {
        clearTransactionForm();
        navigateBackToTransactions();
    };

    // ==========================================
    // API Functions
    // ==========================================

    // Get customers data
    const getCustomers = async() => {
        const api = 'http://localhost:3000/api/customers';
        const response = await fetch(api);

        if(!response.ok){
            throw new Error(`Failed to fetch customers with error code: ${response.status}`);
        }

        const data = await response.json();
        setCustomers(data);
    };

    // Get rewards data
    const getRewards = async() => {
        const api = 'http://localhost:3000/api/rewards';
        const response = await fetch(api);

        if(!response.ok){
            throw new Error(`Failed to fetch rewards data with error code: ${response.status}`);
        }

        const data = await response.json();
        setRewards(data);
    };

    // Redeem a reward for a customer
    const redeemReward = async() => {
         const api = 'http://localhost:3000/api/transactions';
         const response = await fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                customerId: transaction.customerId,
                rewardId: transaction.rewardId,
                type: 2,
            })
         });

         if(!response.ok){
            throw new Error(`Failed to redeem reward with error code: ${response.status}`);
         }
    };

    // ==========================================
    // Helper Functions
    // ==========================================
    
    // Validate form inputs
    const validateTransaction = () => {
        let validationError = "";
        if(!transaction.customerId.trim()){
            validationError += "Customer is required. ";
        }
        if(!transaction.rewardId.trim()){
            validationError += "Reward is required. ";
        }
        return validationError;
    };

    // Clear transaction form
    const clearTransactionForm = () => {
        setTransaction({
            customerId: "",
            rewardId: "",
        });
    };

    // ==========================================
    // Effects
    // ==========================================

    // Load form data when component mounts.
    useEffect(() => {
        loadFormData();
    }, []);

    // ==========================================
    // Renders
    // ==========================================
    return(
        <div>
            {
                loading
                    ? <p>Loading...</p>
                    : error.trim()
                        ? <p>Error: {error}</p>
                        : <RedeemRewardForm
                            customers={customers}
                            rewards={redeemableRewards}
                            transaction={transaction}
                            loadingTransaction={loadingTransaction}
                            transactionFormError={transactionFormError}
                            handleRedeemRewardInputChange={handleRedeemRewardInputChange}
                            handleCustomerChange={handleCustomerChange}
                            handleRedeemReward={handleRedeemReward}
                            discardTransactionForm={discardTransactionForm}
                        />
            }
        </div>
    )
}

export default RedeemReward;