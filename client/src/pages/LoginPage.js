import { Page, UnderlinedLink } from "../styles/Styles.style";
import { InputGroup } from "../components/InputGroups";
import Input from "../components/Input";
import Button from "../components/Button";
import Container from "../components/Container";

const LoginPage = () => {
    return (
        <Page lightblue>
            <Container>
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

                    <Button type="submit" full>Log in</Button>
                </form>
                <span>
                    <UnderlinedLink to="forgot-password" paddingright="50">Forgot password?</UnderlinedLink>
                    <UnderlinedLink to="signup" paddingleft="50">Request an Account</UnderlinedLink>
                </span>
            </Container>
        </Page>
    );
}

export default LoginPage;