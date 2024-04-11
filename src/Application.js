import { Routes, Route } from "react-router-dom";
import App from "./App";
import SubscribePage from "./SubscribePage"
import ApiCountry from "./ApiCountry";
import Customers from "./Customers";

function Application(){
    return(
        <div className="Application">
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="subscribe" element={<SubscribePage/>}/>
                <Route path="api" element={<ApiCountry/>}/>
                <Route path="customers" element={<Customers/>}/>
            </Routes>
        </div>
    )
}
export default Application