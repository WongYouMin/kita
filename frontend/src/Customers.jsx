function Customers(){
   
    const customers = [
        { id: 101, name: "Mia", points: 500 },
        { id: 102, name: "John", points: 800 },
        { id: 103, name: "Alex", points: 300 }
    ];
   
    return(
        <>
            <h3>Customer List</h3>
            {
                customers.length > 0
                    ? customers.map(({id, name, points}) => {
                        return (
                            <p key={id}>{name} {points}</p>
                        )
                    })
                    : <p>No customers found.</p>
            }
        </>
    )
}

export default Customers;