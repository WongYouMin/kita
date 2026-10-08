function RewardForm({editing, handleUpdateReward, handleAddReward, reward, updateRewardState, rewardFormError, discardRewardForm}) {
    return(
        <div className="reward-form">
             <form onSubmit={editing ? handleUpdateReward : handleAddReward}>
                <h2>{editing ? reward.title : 'Reward'}</h2>
                {editing
                    ? <input type="number" value={reward?.id} disabled/>
                    : null
                }
                <input type="text" 
                    value={reward.title}
                    name="title" 
                    onChange={updateRewardState} 
                    placeholder="Title"
                />
                <input type="text" 
                    value={reward.description}
                    name="description" 
                    onChange={updateRewardState} 
                    placeholder="Description"
                />
                <input type="number" 
                    value={reward.points}
                    name="points" 
                    onChange={updateRewardState} 
                    placeholder="Points" 
                />
                <input type="url" 
                    value={reward.images}
                    name="images" 
                    onChange={updateRewardState} 
                    placeholder="Image URL"
                />
                <div className="reward-form-actions">
                    <button type="submit">{editing ? 'Update' : 'Create'}</button>
                    <button type="button" onClick={discardRewardForm}>Cancel</button>
                </div>
                {rewardFormError.trim() ? 
                    <p className="error">{rewardFormError}</p>
                    : null
                }
            </form>
        </div>
       
    )
}

export default RewardForm;