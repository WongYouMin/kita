function CustomerCard({customer, updateCustomerPoints, updateCustomerStatus}){
    return(
        <>
            <h4>Customer: {customer.name}</h4>
            <p>Points: {customer.points}</p>
            <p>Status: {customer.isMember ? 'Member' : 'Not a member'}</p>
            <button name="points" value={customer.points} onClick={updateCustomerPoints}>[Add 100 points]</button>
            <button name="isMember" value={customer.isMember} onClick={updateCustomerStatus}>{customer.isMember ? 'Leave Membership' : 'Join Membership'}</button>
        </>
    )
}

export default CustomerCard