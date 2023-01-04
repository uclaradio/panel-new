import Navbar from "../components/Navbar";
import { Page, ProfilePicture, SideBySide } from "../styles/Styles.style";
import Container from "../components/Container";
import { InlineInputGroup } from "../components/InputGroups";
import Input from "../components/Input";
import BoxLogo from "../assets/og_box_logo.jpg";

const HomePage = () => {
    const fullName = "Joe Bruin";

    return (
        <Page>
            <Navbar/>

            <SideBySide>

                <Container profile="true">
                    <h1>{fullName}</h1>
                    <ProfilePicture src={BoxLogo} alt="Box Logo"/>

                    <InlineInputGroup>
                        <label htmlFor="profile">Profile</label>
                        <Input type="text" placeholder="Choose File" id="profile"/>
                    </InlineInputGroup>

                    <InlineInputGroup>
                        <label htmlFor="dj-name">DJ Name</label>
                        <Input type="text" placeholder="Enter DJ Name" id="dj-name"/>
                    </InlineInputGroup>

                    <InlineInputGroup>
                        <label htmlFor="departments">Departments</label>
                        <Input type="text" placeholder="Add Department" id="departments"/>
                    </InlineInputGroup>

                    <InlineInputGroup>
                        <label htmlFor="roles">Roles</label>
                        <Input type="text" placeholder="Add Role" id="roles"/>
                    </InlineInputGroup>

                    <InlineInputGroup>
                        <label htmlFor="bio">Bio</label>
                        <Input type="text" placeholder="Enter Bio" id="bio"/>
                    </InlineInputGroup>

                </Container>

                <Container shows="true">
                    <h1>Shows</h1>


                </Container>

            </SideBySide>
        </Page>
    )
}

export default HomePage;