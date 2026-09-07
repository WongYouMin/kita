function RewardButton({name, points, reward}){

    const redeem = (rewardName) => {
        console.log(`${name} redeemed ${rewardName} using ${points} points.`);
    }

    return(
        <button onClick={() => {redeem(reward)}}>Redeem Reward</button>
    )

}

export default RewardButton