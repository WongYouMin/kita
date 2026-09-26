function CustomerList({customers, error, loading}){
    return (
    <>
        {
            loading 
            ? <p>Loading customers...</p>
            : error
                ? <p>⚠️{error}</p>
                : customers.length > 0 
                ? customers.map(({id, name}) => {
                    return <p key={id}>{name}</p>
                })
                : <p>No customers found.</p>
        }
    </>
    )
}

export default CustomerList