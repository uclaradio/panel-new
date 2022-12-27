import { Page } from "../styles/Styles.style";
import FormContainer from "../components/FormContainer";
import InputGroup from "../components/InputGroup";
import Input from "../components/Input";
import Button from "../components/Button";

const SignupPage = () => {
    return (
        <Page lightblue>
            <FormContainer>
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

                    <Button type="submit" full>Request Account</Button>
                </form>
            </FormContainer>
        </Page>
    );
}

export default SignupPage;