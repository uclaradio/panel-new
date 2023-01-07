import { Page } from "../styles/Styles.style";
import { InputGroup } from "../components/InputGroups";
import Input from "../components/Input";
import Button from "../components/Button";
import Container from "../components/Container";

const SignupPage = () => {
    return (
        <Page lightblue>
            <Container>
                <h1>Request Account</h1>
                <h5>Please fill out the forms below to request an account</h5>
                <form onSubmit={(e) => e.preventDefault()}>
                    <InputGroup>
                        <label htmlFor="full-name">Full Name</label>
                        <Input type="text" id="full-name"/>
                    </InputGroup>

                    <InputGroup>
                        <label htmlFor="login-email">Email Address</label>
                        <Input type="text" id="login-email"/>
                    </InputGroup>

                    <InputGroup>
                        <label htmlFor="login-password">Password</label>
                        <Input type="password" id="login-password"/>
                    </InputGroup>

                    <Button type="submit">Request Account</Button>
                </form>
            </Container>
        </Page>
    );
}

export default SignupPage;