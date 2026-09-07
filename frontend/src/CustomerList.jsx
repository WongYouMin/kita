import CustomerCard from './CustomerCard'
import {Fragment} from "react"

function CustomerList({customers}){
    return(
        <>
            {customers.map(({id, name, points, hasReward}) => {
                return(
                    <Fragment key={id}>
                        {hasReward ? <p>🎁 Reward available!</p> : <p>No reward available</p>}
                        <CustomerCard
                            name={name}
                            points={points}
                        />
                    </Fragment>
                )})
            }
        </>
    )
}

export default CustomerList