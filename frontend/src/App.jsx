import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from './pages/Dashboard'
import Customers from './pages/Customers'
import CustomerList from "./pages/CustomerList"
import CustomerNew from "./pages/CustomerNew"
import CustomerDetails from './pages/CustomerDetails'
import Rewards from './pages/Rewards'
import Transactions from './pages/Transactions'
import TransactionList from "./pages/TransactionList"
import AwardPoints from "./pages/AwardPoints"
import RedeemReward from "./pages/RedeemReward"
import Layout from "./components/Layout"
function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Dashboard/>}/>
                    <Route path="customers" element={<Customers/>}>
                        <Route index element={<CustomerList/>} />
                        <Route path="new" element={<CustomerNew/>} />
                        <Route path=":customerId" element={<CustomerDetails/>} />
                    </Route>
                    <Route path="rewards" element={<Rewards/>}/>
                    <Route path="transactions" element={<Transactions/>}>
                        <Route index element={<TransactionList/>} />
                        <Route path="awardPoints" element={<AwardPoints/>} />
                        <Route path="redeemReward" element={<RedeemReward/>} />
                    </Route>
                </Route>
            </Routes>
       </BrowserRouter>
    )
}

export default App