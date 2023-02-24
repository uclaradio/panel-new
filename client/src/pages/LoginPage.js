import { Page, Spacer, UnderlinedLink } from "../styles/Styles.style";
import { InputGroup } from "../components/InputGroups";
import Input from "../components/Input";
import Button from "../components/Button";
import { LoginContainer } from "../components/Containers";

//import Login from "../components/GAuth/gauth_login.js";
//import Logout from "../components/GAuth/gauth_logout.js";

import { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import jwt_decode from "jwt-decode";

import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({});

    function handleCallbackResponse(response) {
        console.log("Encoded JWT ID token:" + response.credential);
        var userObject = jwt_decode(response.credential);
        console.log(userObject);
        setUser(userObject);
        document.getElementById("signInDiv").hidden = true;
    }

    function handleSignOut(event) {
        setUser({});
        document.getElementById("signInDiv").hidden = false;
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id:
                "163518163644-2ga8bmdn34uautsdm8btcrqi1g56m3hu.apps.googleusercontent.com",
            callback: handleCallbackResponse,
        });

        google.accounts.id.renderButton(document.getElementById("signInDiv"), {
            theme: "outline",
            size: "large",
        });
        // function start() {
        //     gapi.client.init({
        //         client_id: client_id,
        //         scope: "",
        //     });
        // }

        // gapi.load("client:auth2", start);
    }, []);

    //login button but if have user, show logout

    return (
        <Page lightblue>
            <LoginContainer>
                <h1>Secret DJ Panel</h1>
                <h3>Please log in with your account</h3>

                <div id="signInDiv"></div>
                {
                    //if user is logged in, show sign out button
                    Object.keys(user).length != 0 && (
                            <Button onClick={(e) => handleSignOut(e)}>
                                Sign Out
                            </Button>
                        ) &&
                        navigate("/home")
                }

                {/* <Button
                    type="submit"
                    onClick={() => {
                        navigate("/home");
                        // if (currentUserEmail() != null) {
                        //     navigate("/Profile");
                        // } else {
                        //     login().then((result) => {
                        //         if (result) {
                        //             navigate("/Profile");
                        //         }
                        //     });
                        // }
                    }}
                >
                    Log in
                    </Button>
                 */}

                {/* <form onSubmit={(e) => e.preventDefault()}>
                    <InputGroup>
                        <label htmlFor="login-email">Email Address</label>
                        <Input type="text" placeholder="name@email.com" id="login-email"/>
                    </InputGroup>

                    <InputGroup>
                        <label htmlFor="login-password">Password</label>
                        <Input type="password" placeholder="Password" id="login-password"/>
                    </InputGroup>

                    <Button type="submit">Log in</Button>
                </form>
                <span>
                    <UnderlinedLink to="forgot-password">Forgot password?</UnderlinedLink>
                    <Spacer width="125px"/>
                    <UnderlinedLink to="signup">Request an Account</UnderlinedLink>
                </span> */}
            </LoginContainer>
        </Page>
    );
};

export default LoginPage;
