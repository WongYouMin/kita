import { useEffect, useState } from "react";
import StatCard from "../components/StatCard";
import { transactionType, transactionsData } from "../data/transactionsData";
function Dashboard() {
    // ==========================================
    // States
    // ==========================================

    const [loading, setLoading] = useState(true);
    const [dashboardData, setDashboardData] = useState([]);
    const [error, setError] = useState("");

    // ==========================================
    // Data Loader
    // ==========================================

    // Load dashboard data
    const loadDashboardData = async() => {
        setLoading(true);
        setError("");
        try {
            await fetchDashboardData();
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    // ==========================================
    // API Functions
    // ==========================================

    // Fetch and process dashboard data
    const fetchDashboardData = async() => {
        const api = 'https://dummyjson.com/users';
        const response = await fetch(api);
        if(!response.ok){
            throw new Error(`Failed to fetch total customers with error code ${response.status}.`);
        }
        const customersResponse = await response.json();
        const statsData = [];
        statsData.push({
            statLabel: "Total Customers",
            statValue: customersResponse.total
        });

        const totalRewardRedemptions = transactionsData.filter(({type}) => transactionType.redeem === type).length;
        statsData.push({
            statLabel: "Total Reward Redemptions",
            statValue: totalRewardRedemptions
        });

        const totalLoyaltyTransactions = transactionsData.length;
            statsData.push({
            statLabel: "Total Loyalty Transactions",
            statValue: totalLoyaltyTransactions
        });

        setDashboardData(statsData);
    };

    // ==========================================
    // Effects
    // ==========================================

    // Load dashboard data when component mounts
    useEffect(() => {
        loadDashboardData();
    }, []);

    // ==========================================
    // Renders
    // ==========================================
    return(
        <>
            <h1>Dashboard</h1>
            <div className="dashboard-stats">
            {
                loading
                    ? <p>Loading...</p>
                    : error.trim()
                        ? <p>Error: {error}</p>
                        : dashboardData.length > 0
                            ? dashboardData.map(({statLabel, statValue}) => {
                                return (
                                    <StatCard
                                        key={statLabel}
                                        statLabel={statLabel}
                                        statValue={statValue}
                                    />
                                )
                            })
                            : <p>No dashboard data loaded.</p>
            }
            </div>
            
        </>
    )
}

export default Dashboard;