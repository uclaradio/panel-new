import { Page } from "../styles/Styles.style";
import Cat404 from "../assets/cat404.jpg";

const ErrorPage = () => {
    return (
        <Page lightblue>
            <img style={{ "marginTop": "100px" }} src={Cat404} alt="Cat 404"/>
        </Page>
    );
};

export default ErrorPage;