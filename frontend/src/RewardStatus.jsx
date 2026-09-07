function RewardStatus({customerName, points, hasReward}){
    return(
        <>
            <h3>{customerName}</h3>
            <h3>{points}</h3>
            {hasReward ?
                <h3>🎁 You have a reward available!</h3>
                :
                <>
                    <h3>No rewards available yet.</h3>
                    <h3>Keep earning points!</h3>
                </>
            }
        </>
    )
}

export default RewardStatus