import RewardCard from "./RewardCard"
function RewardList({rewards, customer, handleRedeem}){
    return(
        <>
            {rewards
                .map(({id, name, points}) => {
                return(
                    <RewardCard
                        key={id}
                        name={name}
                        points={points}
                        customer={customer}
                        handleRedeem={handleRedeem}
                    />
                )
            })}
        </>
    )
}

export default RewardList