import { Route, Routes, useNavigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import FAQPage from "./pages/FAQPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";

function Panel() {
    const navigate = useNavigate();

    // if not logged in, just return LoginPage
    // https://stackoverflow.com/questions/44092341/how-do-index-js-files-work-in-react-component-directories

    return (
        <div>
            {/*<Navbar />*/}
            <Routes>
                <Route path="/" element={<LoginPage navigate={navigate}/>}/>
                <Route path="/faq" element={<FAQPage/>}/>
                <Route path="/forgot-password" element={<ForgotPasswordPage/>}/>
                <Route path="/signup" element={<SignupPage/>}/>
                <Route path="/home" element={<HomePage/>}/>
            </Routes>
        </div>
    );
}

export default Panel;