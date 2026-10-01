import { useParams, Outlet, Link } from "react-router-dom";
function CustomerDetails(){
    const {customerId} = useParams();
    const customers = [
        {id: 101, name: "Amy", points: 100},
        {id: 102, name: "Bob", points: 150},
        {id: 103, name: "Charlie", points: 200}
    ];
    const data = customers.find(({id}) => id === Number(customerId));

    return(
        <>
            <h3>Customer Details</h3>
            {
                data !== undefined
                    ? (
                        <>
                            <p>Name: {data.name}</p>
                            <p>Points: {data.points}</p>
                            <Link to={`/customers/${customerId}/rewards`}>View Rewards</Link>
                            <Outlet/>
                        </>
                    )
                    : <p>No customers found</p>
            }
        </>
    )
}

export default CustomerDetails;