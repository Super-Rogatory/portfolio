import React from "react";
import { GlobalStyles } from "../styles/GlobalStyles.style";
import NavBar from "./NavBar";
import Footer from "./Footer";
import {
    Container,
    BodyContainer
} from "../styles/FrontPage.style";
import { Button } from "../styles/NavBar.style";
import { ContactSectionContainer } from "../styles/Contact.style";

class Contact extends React.Component {
    render() {
        return (
            <Container>
                <GlobalStyles />
                <NavBar />
                <BodyContainer>
                    <ContactSectionContainer>
                        <h1 style={{ color: "aliceblue" }}>Connect.</h1>
                        <p style={{ color: "#D3D3D3", textAlign: "center" }}>
                            {`I am actively seeking new graduate opportunities. While I am particularly interested in roles as a front-end or back-end engineer, I am open to exploring a diverse array of opportunities. Please feel free to reach out via email using the button below.`}
                        </p>
                        <Button onClick={() => window.location = 'mailto:chukwudimikem@gmail.com'} size="small">
                            <span>Contact</span>
                        </Button>
                    </ContactSectionContainer>
                </BodyContainer>
                <Footer />
            </Container>
        );
    }
}

export default Contact;
