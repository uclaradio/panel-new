import { Page } from "../styles/Styles.style";
import { LoginFormContainer } from "../components/FormContainers";
import InputGroup from "../components/InputGroup";
import Input from "../components/Input";
import Button from "../components/Button";

const ForgotPasswordPage = () => {
    return (
        <Page lightblue>
            <LoginFormContainer>
                <h1>Reset Password</h1>
                <h4>Enter the email associated with your account</h4>
                <form onSubmit={(e) => e.preventDefault()}>
                    <InputGroup>
                        <label htmlFor="login-email">Email Address</label>
                        <Input type="text" placeholder="name@email.com" id="login-email"/>
                    </InputGroup>

                    <Button type="submit" full>Reset Password</Button>
                </form>
            </LoginFormContainer>
        </Page>
    );
}

export default ForgotPasswordPage;