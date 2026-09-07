function RewardCard({name, points, customer, handleRedeem}){
    return(
        <>
            <p>{name}</p>
            <p>{points} points</p>
            {customer.points >= points ?
                <button onClick={()=>{handleRedeem(name, points)}}>
                    [Redeem]
                </button>
                :
                <button>
                    [Cannot Redeem]
                </button>
            }
            
        </>
    )
}

export default RewardCard