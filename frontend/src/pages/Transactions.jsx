import { Outlet } from "react-router-dom";
function Transactions() {
    return(
        <>
            <h1>Transactions</h1>
            <Outlet/>
        </>
    )
}

export default Transactions;