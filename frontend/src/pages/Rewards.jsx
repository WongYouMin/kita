import { useEffect, useState } from "react";
import RewardCard from "../components/RewardCard";
import RewardForm from "../components/RewardForm";
function Rewards() {
    // ==========================================
    // States
    // ==========================================
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [rewards, setRewards] = useState([]);

    // reward is a temporary state 
    // used to hold: 
    //  1. the new reward currently being created
    //  2. the selected reward currently being edited
    // in the RewardForm
    const [reward, setReward] = useState({
        id: null,
        title: "",
        description: "",
        points: 0,
        images: ""
    });

    const [editing, setEditing] = useState(false);
    const [showRewardForm, setShowRewardForm] = useState(false);
    const [rewardFormError, setRewardFormError] = useState("");

    // ==========================================
    // Data Loader
    // ==========================================

    // Load rewards data
    const loadRewardsData = async() => {
        setLoading(true);
        setError("");
        try {
            await fetchRewardsData();            
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    // ==========================================
    // Event Handler
    // ==========================================

    // Handle changes made to reward state
    const updateRewardState = (event) => {
        setReward((previous) => ({
            ...previous,
            [event.target.name] : event.target.value
        }));
    };

    // Handle add reward form submission
    const handleAddReward = async(event) => {
        event.preventDefault();
       
        setRewardFormError("");
        const validationError = validateReward();

        if(validationError.trim()){
            setRewardFormError(validationError);
        } else {
             setLoading(true);
            try {
                await addReward();
                clearReward();
                setShowRewardForm(false);
            } catch (error) {
                setRewardFormError(error.message);
            } finally {
                setLoading(false);
            }
        }
        
    };

    // Handle selecting a reward for editing
    const handleEditReward = (event) => {
        setEditing(true);
        setError("");

        const rewardId = Number(event.currentTarget.value);
        const rewardData = rewards.find(({id}) => id === rewardId);
        
        if(rewardData === undefined){
            setError('Failed to retrieve reward data');
        } else {
            setReward({
                id: rewardData.id,
                title: rewardData.title,
                description: rewardData.description,
                points: Math.floor(rewardData.price * 100),
                images: rewardData.images
            });
            setShowRewardForm(true);
        }
    };

    // Handle update reward form submission
    const handleUpdateReward = async(event) => {
        event.preventDefault();

        setRewardFormError("");
        const validationError = validateReward();

        if(validationError.trim()){
            setRewardFormError(validationError);
        } else {
            setLoading(true);
            try {
                await updateReward();
                clearReward();
                setEditing(false);
                setShowRewardForm(false);
            } catch (error) {
                setRewardFormError(error.message);
            } finally {
                setLoading(false);
            }
        }

    };

    // Discard reward form
    const discardRewardForm = () => {
        setRewardFormError("");
        setShowRewardForm(false);
        setEditing(false);
        clearReward();
    };

    // Handle delete reward
    const handleDeleteReward = async(event) => {
        setLoading(true);
        try {
            await deleteReward(Number(event.currentTarget.value));
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };


    // ==========================================
    // API Functions
    // ==========================================

    // Fetch and process rewards data
    const fetchRewardsData = async() => {
        const api = 'https://dummyjson.com/products';
        const response = await fetch(api);
        if(!response.ok){
            throw new Error(`Failed to fetch rewards with error code ${response.status}`);
        }
        const rewardsResponse = await response.json();
        setRewards(rewardsResponse.products);
    };

    // Create a new reward
    const addReward = async() => {
        const api = 'https://dummyjson.com/products/add';
        const response = await fetch(api, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                title: reward.title,
                price: Number(reward.points) / 100,
                description: reward.description,
                images: reward.images
            })
        });
        if(!response.ok){
            throw new Error(`Failed to add reward with error code ${response.status}`);
        }
        const newRewardResponse = await response.json();
        // Adding the newly created reward manually
        // due to DummyJson not actually adding reward to the database
        setRewards(previous => {return [
            newRewardResponse,
            ...previous
        ]});
        
    };

    // Update a reward
    const updateReward = async() => {
        const api = `https://dummyjson.com/products/${reward.id}`;
        const response = await fetch(api, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: reward.title,
                price: Number(reward.points) / 100,
                description: reward.description,
                images: reward.images
            })
        });
        
        if(!response.ok){
            throw new Error(`Failed to update reward with error code: ${response.status}`);
        }

        const updatedReward = await response.json();
        const rewardExists = rewards.some(({id}) => id === reward.id);
        if(!rewardExists){
            throw new Error(`Failed to find reward with id: ${reward.id}`);
        }

        // Updating the newly updated reward manually
        // due to DummyJson not actually modifying updated reward in database
        setRewards(previous => {
            return previous.map((currentReward) => {
                return currentReward.id === updatedReward.id
                    ? updatedReward
                    : currentReward
            });
        })
    };

    // Delete a reward
    const deleteReward = async(rewardId) => {
        const api = `https://dummyjson.com/products/${rewardId}`;
        const response = await fetch(api, {
            method: 'DELETE'
        });
        if(!response.ok){
            throw new Error(`Failed to delete product with id ${rewardId}. Error code: ${response.status}`);
        }
        const deleteRewardResponse = await response.json();

        // Deleting the reward manually
        // due to DummyJson not actually removing deleted reward in database
        setRewards(previous => previous.filter(({id}) => id !== deleteRewardResponse.id));
    };

    // ==========================================
    // Helper Functions
    // ==========================================
    
    // Validate reward
    const validateReward = () => {
        let validationError = "";
        if(!reward.title.trim()){
            validationError += 'Invalid reward title. ';
        }
        if(!Number.isFinite(Number(reward.points)) || Number(reward.points) < 1){
            validationError += 'Invalid reward points. ';
        }
        return validationError;
    };

    // Clear new reward state
    const clearReward = () => {
        setReward({
            id: null,
            title: "",
            description: "",
            points: 0,
            images: ""
        });
    };


    // ==========================================
    // Effects
    // ==========================================

    // Load rewards data when component mounts
    useEffect(() => {
        loadRewardsData();
    }, []);

    // ==========================================
    // Render
    // ==========================================
    return(
        <>
            <h1>Rewards</h1>
            {
                showRewardForm
                    ? <RewardForm
                        editing={editing}
                        handleAddReward={handleAddReward}
                        handleUpdateReward={handleUpdateReward}
                        reward={reward}
                        updateRewardState={updateRewardState}
                        rewardFormError={rewardFormError}
                        discardRewardForm={discardRewardForm}
                      />
                    : <div className="rewards-header">
                        <button className="show-add-reward-button" onClick={() => setShowRewardForm(true)}>Add Reward</button>
                    </div>
            }
            <div className="rewards-grid">
                {
                    loading
                        ? <p>Loading...</p>
                        : error.trim()
                            ? <p>Error: {error}</p>
                            : rewards.length > 0
                                ? rewards.map(({id, title, description, price, images}) => {
                                    return (
                                        <RewardCard
                                            key={id}
                                            id={id}
                                            title={title}
                                            description={description}
                                            price={price}
                                            images={images}
                                            handleDeleteReward={handleDeleteReward}
                                            handleEditReward={handleEditReward}
                                        />
                                    )
                                })
                                : <p>No rewards found.</p>
                }
            </div>

        </>
    )
}

export default Rewards;