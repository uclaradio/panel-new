import { Page, Spacer, UnderlinedLink } from "../styles/Styles.style";
import { InputGroup } from "../components/InputGroups";
import Input from "../components/Input";
import Button from "../components/Button";
import { LoginContainer } from "../components/Containers";

const LoginPage = () => {
    return (
        <Page lightblue>
            <LoginContainer>
                <h1>Secret DJ Panel</h1>
                <h3>Please log in with your account</h3>
                <form onSubmit={(e) => e.preventDefault()}>
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
                </span>
            </LoginContainer>
        </Page>
    );
}

export default LoginPage;