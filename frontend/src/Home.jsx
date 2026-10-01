import { Link } from "react-router-dom";
function Home(){
    const customers = [
        { id: 101, name: "Mia" },
        { id: 102, name: "John" },
        { id: 103, name: "Alex" }
    ];
    return(
        <>
            <h1>Home</h1>
            {customers.length > 0
                ? customers.map(({id, name}) => {
                    return (
                        <Link key={id} to={`/customers/${id}`}>View {name}</Link>
                    )
                })
                : <p>No customers found.</p>
            }
        </>
    )
}

export default Home;