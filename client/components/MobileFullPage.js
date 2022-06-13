import React from "react";
import { GlobalStyles } from "../styles/GlobalStyles.style";
import NavBar from "./NavBar";
import Footer from "./Footer";
import {
    Container,
    MainSection,
    BodyContainer,
    BodySectionContainer,
} from "../styles/FrontPage.style";
import MediaQuery from "react-responsive";
import { connect } from "react-redux";
import { togglePopup } from "../store/actions/actionCreators";
import { Button } from "../styles/NavBar.style";
import SkillsPopup from "./SkillsPopup";
import portait from '../files/closegradphoto.jpg';
import { AboutContainer, AboutTextContainer, AboutImageContainer } from "../styles/About.style";
import { ProjectSectionContainer, Cards } from "../styles/ProjectCard.style";
import FullCardList from "./FullCardList";
import { ContactSectionContainer } from "../styles/Contact.style";
import { Divider } from "../styles/MobileFullPage.style";
import Contact from "./Contact";

class MobileFullPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { openPopup, togglePopup } = this.props;
        return (
            <Container type="mobile">
                <GlobalStyles />
                <NavBar type="mobile" />
                <MainSection type="mobile">
                    {openPopup && <SkillsPopup type="mobile" />}
                    <BodyContainer type="mobile">
                        <BodySectionContainer type="mobile">
                            <h6>Hello there! My name is</h6>
                            <h1 style={{ color: "aliceblue",  }}>Chukwudi Ikem.</h1>
                            <h2 style={{ color: "#D3D3D3" }}>
                                New grad software engineer.
                            </h2>
                            <p>
                                I graduated <span>cum laude honors</span> with a B.S. in Computer
                                Science and a minor in Mathematics. I also graduated
                                from a <span>software engineering bootcamp</span> back in 2021
                                from Fullstack Academy. I strive to learn and grow
                                as a developer because programming is fun!
                            </p>
                            <Button size="long" onClick={() => togglePopup() }>
                                <span>Current Skills</span>
                            </Button>
                        </BodySectionContainer>
                    </BodyContainer>
                    {/* ------------------------------------------------------------------------------------------------------------- */}
                    <Divider dividerFor="about">
                            <h2>
                                <span>01. </span>About Me
                            </h2>
                    </Divider>                     
                    <AboutContainer type="mobile">            
                        <AboutTextContainer type="mobile" style={{textAlign: "center"}}>
                            <p>
                                Hi! My name is Chukwudi Ikem and I am a <span>first generation Nigerian American</span> with the hopes of learning more about
                                the mystery that are computers. I have an <span>interest in Web Development</span> that started after my coding bootcamp
                                at FullStack Academy in 2021.
                            </p>
                            <p>
                                Since I was a young boy, I've always had an affinity towards technology. <span>Some of the best memories I have ended with a broken computer </span>
                                and an apology to my father. There will always be something intrinsically fascinating about typing onto a mechanical keyboard and text appearing on the screen.
                            </p>
                            <p>
                                Furthermore, learning Web Development from front to back end is very rewarding and I hope that I might continue to learn and improve on my skills.
                            </p>
                            <p>
                                P.S. I have more personality than that serious picture conveys, <span>check out my TikTok page to see my goofy side!</span>
                            </p>                             
                        </AboutTextContainer>
                        <AboutImageContainer type="mobile">
                            <img src={portait} alt="self portrait of graduation photos" />
                        </AboutImageContainer>
                    </AboutContainer> 
                    {/* ------------------------------------------------------------------------------------------------------------- */}
                    <Divider>
                            <h2>
                                <span>02. </span>Projects
                            </h2>
                    </Divider>                      
                    <ProjectSectionContainer type="mobile">
                        <Cards type="mobile">
                            <FullCardList type="mobile" />                                
                        </Cards>
                    </ProjectSectionContainer>
                    {/* ------------------------------------------------------------------------------------------------------------- */}
                    <Divider>
                            <h2>
                                <span>03. </span>Contact
                            </h2>
                        </Divider>   
                    <ContactSectionContainer type="mobile">                        
                        <p style={{ color: "#D3D3D3", textAlign: "center" }}>
                            {`I am currently looking for new grad opportunities. I would prefer a job as a web developer considering it is my passion, but honestly, 
                        code is code and I will not restrict myself to certain endeavors. Feel free to email me using the button below.`}
                        </p>
                        <Button onClick={() => window.location = 'mailto:chukwudimikem@gmail.com'} size="small">
                            <span>Contact</span>
                        </Button>
                    </ContactSectionContainer>  
                </MainSection>                                                                                 
                <Footer type="mobile" />
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        openPopup: state.openPopup,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // dispatching plain actions
        togglePopup: () => dispatch(togglePopup(true)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileFullPage);
