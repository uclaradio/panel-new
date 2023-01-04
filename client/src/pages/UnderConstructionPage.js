import { Page } from "../styles/Styles.style";
import ConstructionCat from "../assets/construction.jpg";

const UnderConstructionPage = () => {
    return (
        <Page lightblue>
            <img style={{ "marginTop": "100px" }} src={ConstructionCat} alt="Construction Cat"/>
        </Page>
    );
};

export default UnderConstructionPage;