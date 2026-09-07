import CustomerCard from "./CustomerCard";
import RewardList from "./RewardList";

function App(){

  // Data
  const customer = {
    name: "Mia",
    points: 1500
  };

  const rewards = [
    { id: 1, name: "Iced Latte", points: 500 },
    { id: 2, name: "Chicken Sandwich", points: 1000 },
    { id: 3, name: "Cheesecake", points: 1800 }
  ];

  const handleRedeem = (rewardName, rewardPoints) => {
    console.log(`${customer.name} redeemed ${rewardName} for ${rewardPoints} points.`);
  };

  return(
    <>
      <CustomerCard
        customer={customer}
      />
      <RewardList
        rewards={rewards}
        customer={customer}
        handleRedeem={handleRedeem}
      />
    </>
  )
}

export default App