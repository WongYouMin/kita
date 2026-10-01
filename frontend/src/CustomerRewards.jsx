import { useNavigate } from "react-router-dom";

function CustomerRewards() {
    const navigate = useNavigate();
    return (
        <>
            <h3>Customer Rewards</h3>
            <p>Rewards loaded!</p>
            <button onClick={() => {
                console.log(`Reward redeemed!`);
                navigate(`/rewards`);
            }}>[Redeem Reward]</button>

            <button onClick={() => {
                navigate('..');
            }}>
                [Back to Customer]
            </button>

            <button onClick={() => {
                navigate('/rewards');
            }}>
                [Go to Rewards]
            </button>
        </>
    )
}

export default CustomerRewards;