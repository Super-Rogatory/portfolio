import React from "react";
import { GlobalStyles } from "../styles/GlobalStyles.style";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Container, BodyContainer } from "../styles/FrontPage.style";
import portait from '../files/closegradphoto.jpg';
import { AboutContainer, AboutTextContainer, AboutImageContainer } from "../styles/About.style";
import MediaQuery from "react-responsive";

class About extends React.Component {
    render() {
        return (
            <Container>
                <GlobalStyles />
                <NavBar />
                <BodyContainer>
                    <AboutContainer>
                        <MediaQuery maxHeight={400}>
                            <AboutTextContainer>
                                <p>
                                   Maximize browser page for more information! 
                                </p>                                
                            </AboutTextContainer>
                        </MediaQuery>
                        <MediaQuery minHeight={401}>
                            <AboutTextContainer>
                                <p>
                                    Hi! My name is Chukwudi Ikem and I am a first generation Nigerian American with the hopes of learning more about
                                    the mystery that are computers. I have an interest in Web Development that started after my coding bootcamp
                                    at FullStack Academy in 2021.
                                </p>
                                <p>
                                    Since I was a young boy, I've always had an affinity towards technology. Some of the best memories I have ended with a broken computer
                                    and an apology to my father. There will always be something intrinsically fascinating about typing onto a mechanical keyboard and text appearing on the screen.
                                </p>
                                <p>
                                    Futhermore, learning Web Development from front to back end is very rewarding and I hope that I might continue to learn and improve on my skills.
                                </p>
                                <p>
                                    P.S. I have more personality than that serious picture conveys, check out my TikTok page to see my goofy side!
                                </p>                             
                            </AboutTextContainer>
                        </MediaQuery>
                        <AboutImageContainer>
                            <img src={portait} alt="self portrait of graduation photos" />
                        </AboutImageContainer>
                    </AboutContainer>
                </BodyContainer>
                <Footer />
            </Container>
        );
    }
}

export default About;
