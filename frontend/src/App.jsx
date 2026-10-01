import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home'
import Customers from './Customers'
import Rewards from './Rewards'
import NavBar from "./Navbar"
import CustomerRewards from "./CustomerRewards"
import CustomerOverview from "./CustomerOverview"
import CustomerDetails from "./CustomerDetails"

function App() {
    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/customers" element={<Customers/>}/>
                <Route path="/customers/:customerId" element={<CustomerDetails/>}>
                    <Route index element={<CustomerOverview/>}/>
                    <Route path="rewards" element={<CustomerRewards/>}/>
                </Route>
                <Route path="/rewards" element={<Rewards/>}/>
            </Routes>
       </BrowserRouter>
    )
}

export default App