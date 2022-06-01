import React from "react";
import { GlobalStyles } from "./GlobalStyles.style";
import NavBar from "./NavBar";
import Footer from "./Footer";
import {
    Container,
    BodyContainer,
    BodySectionContainer,
} from "./FrontPage.style";
import { Button } from "./NavBar.style";
import headshot from '../icons/headshot.jpg';

class FrontPage extends React.Component {
    render() {
        return (
            <Container>
                <GlobalStyles />
                <NavBar />
                <BodyContainer>
                    <BodySectionContainer>
                        <h6>Hello there! My name is</h6>
                        <h1 style={{ color: 'aliceblue' }}>Chukwudi Ikem.</h1>
                        <h1 style={{ color: '#404040' }}>I am a new grad software engineer.</h1>
                        <p>
                            I attended California State University, Fullerton
                            and received my Bachelor of Science degree for
                            Computer Science. I also graduated from a software
                            engineering bootcamp back in 2021 from Fullstack
                            Academy. I strive to learn and grow as a developer
                            because programming is fun!
                        </p>
                        <Button size="long"><span>Current Skills</span></Button>
                    </BodySectionContainer>
                    <img src={headshot} alt="artistic photo of Chukwudi Ikem" />
                </BodyContainer>
                <Footer />
            </Container>
        );
    }
}

export default FrontPage;
