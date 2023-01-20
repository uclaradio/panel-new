import Navbar from "../components/Navbar";
import { Page, ProfilePicture, SideBySide } from "../styles/Styles.style";
import { HomeContainer } from "../components/Containers";
import { InlineInputGroup } from "../components/InputGroups";
import Input from "../components/Input";
import BoxLogo from "../assets/og_box_logo.jpg";
import Select from "react-select";
import { useState } from "react";
import Button from "../components/Button";

const HomePage = () => {
    const fullName = "Tomas Kaljevic";

    const departments = [
        { value: "artdesign", label: "Art & Design" },
        { value: "comedy", label: "Comedy" },
        { value: "dev", label: "Development" },
        { value: "digipress", label: "Digital Press" },
        { value: "sports", label: "Sports" },
        { value: "events", label: "Events" },
        { value: "marketing", label: "Marketing" },
        { value: "music", label: "Music" },
        { value: "news", label: "News" },
        { value: "productions", label: "Productions" },
        { value: "programming", label: "Programming" },
    ];

    const roles = [
        { value: "dj", label: "DJ" },
        { value: "photographer", label: "Photographer" },
        { value: "editor", label: "Editor" }
    ];

    const styles = {
        placeholder: (defaultStyles) => {
            return {
                ...defaultStyles,
                color: "#c4c4c4",
                fontSize: "16px",
                fontStyle: "italic"
            }
        },
        control: (defaultStyles, { isDisabled }) => {
            return {
                ...defaultStyles,
                border: isDisabled ? "none" : "1px solid #e6e6e6",
                backgroundColor: "white"
            }
        }
    };

    const [editing, setEditing] = useState(false);

    const toggleEdit = () => setEditing(!editing);

    return (
        <Page>
            <Navbar/>

            <SideBySide>

                <HomeContainer profile="true">
                    <h1>{fullName}</h1>
                    <ProfilePicture src={BoxLogo} alt="Box Logo"/>

                    {/*<InlineInputGroup>*/}
                    {/*    <label htmlFor="profile">Profile</label>*/}
                    {/*    <Input type="file" id="profile" />*/}
                    {/*</InlineInputGroup>*/}

                    <InlineInputGroup>
                        <label htmlFor="dj-name">DJ Name</label>
                        <Input type="text" placeholder="Enter DJ Name" id="dj-name" disabled={!editing}/>
                    </InlineInputGroup>

                    <InlineInputGroup>
                        <label htmlFor="departments">Departments</label>
                        <Select className="select" options={departments} placeholder="Add Department"
                                styles={styles}
                                isMulti isDisabled={!editing}/>
                    </InlineInputGroup>

                    <InlineInputGroup>
                        <label htmlFor="roles">Roles</label>
                        <Select className="select" options={roles} placeholder="Add Role" styles={styles} isMulti
                                isDisabled={!editing}/>
                    </InlineInputGroup>

                    <InlineInputGroup>
                        <label htmlFor="bio">Bio</label>
                        <Input type="text" placeholder="Enter Bio" id="bio" disabled={!editing}/>
                    </InlineInputGroup>

                    {editing ?
                        <SideBySide width="fit-content">
                            <Button type="button" onClick={toggleEdit}>Save</Button>
                            <Button type="button" onClick={toggleEdit} cancelable>Cancel</Button>
                        </SideBySide> :
                        <Button type="button" onClick={toggleEdit}>Edit</Button>}
                </HomeContainer>

                <HomeContainer shows="true">
                    <h1>Shows</h1>

                    <Button>Add Show</Button>
                </HomeContainer>

            </SideBySide>
        </Page>
    )
}

export default HomePage;