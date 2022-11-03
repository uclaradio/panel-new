import { Route, Routes, useNavigate } from "react-router-dom";
import LoginPage from "./LoginPage";

function Panel() {
    const navigate = useNavigate();

    return (
        <div>
            <Routes>
                <Route path="/" element={<LoginPage />}/>
            </Routes>
        </div>
    );
}

export default Panel;