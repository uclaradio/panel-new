import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import FAQPage from "./pages/FAQPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";

function Panel() {
    // if not logged in, just return LoginPage
    // https://stackoverflow.com/questions/44092341/how-do-index-js-files-work-in-react-component-directories

    return (
        <div>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/faq" element={<FAQPage/>}/>
                <Route path="/forgot-password" element={<ForgotPasswordPage/>}/>
                <Route path="/signup" element={<SignupPage/>}/>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </div>
    );
}

export default Panel;