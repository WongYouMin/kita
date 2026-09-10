import { useState } from "react"
import CustomerCard from "./CustomerCard";
import RewardList from "./RewardList";
function App(){
const [customer, setCustomer] = useState({
  name: "Mia",
  points: 500,
  isMember: false,
  rewards: [
    { id: 1, name: "Free Coffee" },
    { id: 2, name: "10% Discount" }
  ]
});

const [newReward, setNewReward] = useState("");

const updateCustomerPoints = () => {
  setCustomer((previousCustomer) => ({
      ...previousCustomer,
      points: previousCustomer.points + 100
  }));
};

const updateCustomerStatus = () => {
  setCustomer((previousCustomer) => {
    return {
      ...previousCustomer,
      isMember: !previousCustomer.isMember
    };
  });
};

const updateRewardInput = (event) => {
  setNewReward(event.target.value);
};

const updateReward = (event) => {
  setCustomer((previousCustomer) => {
    if(!event.target.value.trim()){
      return {
        ...previousCustomer
      };
    }
    const updatedRewards = [
      ...previousCustomer.rewards, 
      {
        id: Date.now(),
        name: event.target.value.trim()
      }
    ];
    setNewReward("");
    return {
      ...previousCustomer,
      rewards: updatedRewards
    };
  });
};

const deleteReward = (event) => {
  setCustomer((previousCustomer) => {
    const updatedRewards = previousCustomer.rewards.filter((reward) => reward.id !== Number(event.target.value));
    return {
      ...previousCustomer,
      rewards: updatedRewards
    };
  });
};

const editReward = (event) => {
  setCustomer((previousCustomer) => {
    const randomRewards = ['Biscoff Cookies', 'Oreo Original', 'Orice Rice Crackers'];
    const randomIndex = Math.floor(Math.random() * randomRewards.length);
    const updatedRewards = previousCustomer.rewards.map((reward)=> {
      if(Number(event.target.value) === reward.id){
        return {
          id: reward.id,
          name: randomRewards[randomIndex]
        };
      } else {
        return reward;
      }
    });
    return {
      ...previousCustomer,
      rewards: updatedRewards
    };
  });
};

  return(
    <>
      <CustomerCard
        customer={customer}
        updateCustomerPoints={updateCustomerPoints}
        updateCustomerStatus={updateCustomerStatus}
      />
      <h4>Redeemed Rewards</h4>
      <RewardList
        rewards={customer.rewards}
        deleteReward={deleteReward}
        editReward={editReward}
      />
      <input type="text" name="newReward" value={newReward} onChange={updateRewardInput}/>
      <button name="reward" value={newReward} onClick={updateReward}>[Add Reward]</button>
    </>
  )
}

export default App