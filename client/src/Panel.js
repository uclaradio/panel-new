import "./Panel.css";
import {Route, Routes, useNavigate} from "react-router-dom";
import LoginPage from "./LoginPage";
import FAQPage from "./FAQPage";
import Navbar from "./Navbar";

function Panel() {
    const navigate = useNavigate();

    return (
        <div>
            {/*<Navbar />*/}
            <Routes>
                <Route path="/" element={<LoginPage navigate={navigate}/>}/>
                <Route path="/faq" element={<FAQPage />}/>
            </Routes>
        </div>
    );
}

export default Panel;