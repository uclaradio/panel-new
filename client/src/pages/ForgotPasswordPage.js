import { Page } from "../styles/Styles.style";
import { InputGroup } from "../components/InputGroups";
import Input from "../components/Input";
import Button from "../components/Button";
import { LoginContainer } from "../components/Containers";

const ForgotPasswordPage = () => {
    return (
        <Page lightblue>
            <LoginContainer>
                <h1>Reset Password</h1>
                <h4>Enter the email associated with your account</h4>
                <form onSubmit={(e) => e.preventDefault()}>
                    <InputGroup>
                        <label htmlFor="login-email">Email Address</label>
                        <Input type="text" placeholder="name@email.com" id="login-email"/>
                    </InputGroup>

                    <Button type="submit">Reset Password</Button>
                </form>
            </LoginContainer>
        </Page>
    );
}

export default ForgotPasswordPage;