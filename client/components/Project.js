import React from "react";
import { GlobalStyles } from "../styles/GlobalStyles.style";
import NavBar from "./NavBar";
import Footer from "./Footer";
import {
    Container,
    BodyContainer,
    BodySectionContainer,
} from "../styles/FrontPage.style";

class Project extends React.Component {
    render() {
        return (
            <Container>
                <GlobalStyles />
                <NavBar />
                <BodyContainer>
                    <BodySectionContainer>
                    </BodySectionContainer>
                </BodyContainer>
                <Footer />
            </Container>
        );
    }
}

export default Project;
