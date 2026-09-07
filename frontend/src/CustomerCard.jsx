function CustomerCard({customer}){
    const {name, points} = customer;
    return(
        <>
            <p>{name}</p>
            <p>{points} points</p>
        </>
    )
}

export default CustomerCard