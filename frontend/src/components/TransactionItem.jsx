function TransactionItem({customerDetails, type, points, createdAt}){
    const date = new Date(createdAt).toLocaleString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: "true"
    });
    const {name} = customerDetails[0];
    return(
        <div className="transaction-item">
            <p>{date}</p>
            <p>{name}</p>
            <p>{type === 1 ? 'Earn' : 'Redeem'}</p>
            <p>{type === 1 ? `+${points} pts` : `-${points} pts`}</p>
        </div>
    )
}

export default TransactionItem;