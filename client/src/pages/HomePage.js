import Navbar from "../components/Navbar";
import { Page, SideBySide } from "../styles/Styles.style";
import Container from "../components/Container";

const HomePage = () => {
    return (
        <Page>
            <Navbar/>

            <SideBySide>
                <Container profile="true">

                </Container>

                <Container shows="true">

                </Container>
            </SideBySide>
        </Page>
    )
}

export default HomePage;