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
                            {`I am currently looking for new grad opportunities. I would prefer a job as a web developer considering it is my passion, but honestly, 
                        code is code and I will not restrict myself to certain endeavors. Feel free to email me using the button below.`}
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
