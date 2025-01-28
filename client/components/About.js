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
                                    Hi! My name is Chukwudi Ikem, and I am a <span>first-generation Nigerian American</span> passionate about exploring the fascinating world of computers. My <span>interest in Web Development</span> began at Fullstack Academy in 2021, where I learned full-stack development.
                                </p>
                                <p>
                                    Since childhood, I’ve been captivated by technology. <span>Some of my fondest memories involve tinkering with computers</span>, often breaking them and apologizing to my dad. The ability to bring ideas to life through code continues to inspire me.
                                </p>
                                <p>
                                    After earning my B.S. in Computer Science from California State University, Fullerton, with <span>cum laude honors</span>, I pursued a Master’s in Computer Science at USC. This journey shaped my skills in <span>full-stack development, machine learning, and optimization</span>.
                                </p>
                                <p>
                                    Professionally, I’ve worked on impactful projects, including developing a PyTorch dataset testing kit at IBM and creating web apps, microservices, and games. Programming is my creative outlet, and I’m always eager to learn more. <span>Check out my YouTube page</span> to see my personality beyond the code!
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
