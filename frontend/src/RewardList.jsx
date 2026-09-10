function RewardList({rewards, deleteReward, editReward}){
    return(
        <>
            {
                rewards.map(({id, name}) => {
                    return (
                        <li key={id}>{name} <button value={id} onClick={editReward}>[Edit]</button> <button value={id} onClick={deleteReward}>[Delete]</button></li>
                    )
                })
            }
        </>
    )
}

export default RewardList