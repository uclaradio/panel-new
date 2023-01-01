import { Page } from "../styles/Styles.style";
import InputGroup from "../components/InputGroup";
import Input from "../components/Input";
import Button from "../components/Button";
import Container from "../components/Container";

const ForgotPasswordPage = () => {
    return (
        <Page lightblue>
            <Container>
                <h1>Reset Password</h1>
                <h4>Enter the email associated with your account</h4>
                <form onSubmit={(e) => e.preventDefault()}>
                    <InputGroup>
                        <label htmlFor="login-email">Email Address</label>
                        <Input type="text" placeholder="name@email.com" id="login-email"/>
                    </InputGroup>

                    <Button type="submit" full>Reset Password</Button>
                </form>
            </Container>
        </Page>
    );
}

export default ForgotPasswordPage;