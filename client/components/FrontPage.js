import React from "react";
import { GlobalStyles } from "../styles/GlobalStyles.style";
import NavBar from "./NavBar";
import Footer from "./Footer";
import {
    Container,
    BodyContainer,
    BodySectionContainer,
    ImgContainer,
} from "../styles/FrontPage.style";
import { Button } from "../styles/NavBar.style";
import headshot from "../icons/headshot.png";

class FrontPage extends React.Component {
    render() {
        return (
            <Container>
                <GlobalStyles />
                <NavBar />
                <BodyContainer>
                    <BodySectionContainer>
                        <h6>Hello there! My name is</h6>
                        <h1 style={{ color: "aliceblue" }}>Chukwudi Ikem.</h1>
                        <h1 style={{ color: "#D3D3D3" }}>
                            I am a new grad software engineer.
                        </h1>
                        <p>
                            I graduated cum laude honors with a B.S. in Computer
                            Science and a minor in Mathematics. I also graduated
                            from a software engineering bootcamp back in 2021
                            from Fullstack Academy. I strive to learn and grow
                            as a developer because programming is fun!
                        </p>
                        <Button size="long">
                            <span>Current Skills</span>
                        </Button>
                    </BodySectionContainer>
                    <ImgContainer>
                        <img
                            src={headshot}
                            alt="artistic photo of Chukwudi Ikem"
                        />
                    </ImgContainer>
                </BodyContainer>
                <Footer />
            </Container>
        );
    }
}

export default FrontPage;
