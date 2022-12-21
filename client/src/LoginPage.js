import {useState} from "react";
import Form from "./Form";

function LoginPage(props) {
    const adminLogin = {
        username: "admin",
        password: "radioradioradio"
    };

    const [username, setUsername] = useState("");
    const [error, setError] = useState("");

    const Login = credentials => {
        console.log(credentials);
    }

    const Logout = () => {
        console.log("logged out");
    }

    return (
        <div className="LoginPage">
            <Form />
        </div>
    )
}

export default LoginPage;