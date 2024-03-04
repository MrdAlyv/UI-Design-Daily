import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "../App"
import Account from "../pages/Account"
import Natification from "../pages/Natification"
const Router = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path="/Account" element={<Account />} />
                <Route path="/natification" element={<Natification />} />
            </Routes>

        </BrowserRouter>
    )
}

export default Router