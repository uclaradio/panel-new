import { Route, Routes, useNavigate } from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage.js";

function Panel() {
    const navigate = useNavigate();

    return (
        <div>
            <Routes>
                <Route path="/home" element={<LoginPage />}/>

            </Routes>
        </div>
    );
}

export default Panel;