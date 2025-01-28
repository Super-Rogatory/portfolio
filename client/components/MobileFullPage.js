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
import { connect } from "react-redux";
import { togglePopup } from "../store/actions/actionCreators";
import { Button } from "../styles/NavBar.style";
import SkillsPopup from "./SkillsPopup";
import FullCardList from "./FullCardList";
import portait from '../files/closegradphoto.jpg';
import { AboutContainer, AboutTextContainer, AboutImageContainer } from "../styles/About.style";
import { ProjectSectionContainer, Cards } from "../styles/ProjectCard.style";
import { ContactSectionContainer } from "../styles/Contact.style";
import { Divider } from "../styles/MobileFullPage.style";

class MobileFullPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { openPopup, togglePopup, openSideBar } = this.props;
        return (
            <Container id="home" type="mobile">
                <GlobalStyles />
                <NavBar type="mobile" />
                <MainSection type="mobile" status={openSideBar && "dim"}>
                    {openPopup && <SkillsPopup type="mobile" />}
                    <BodyContainer id="intro" type="mobile">
                        <BodySectionContainer type="mobile">
                            <h6>Hello there! My name is</h6>
                            <h1 style={{ color: "aliceblue",  }}>Chukwudi Makuo Ikem.</h1>
                            <h2 style={{ color: "#D3D3D3" }}>
                                New grad software engineer.
                            </h2>
                            <p>
                                I graduated from a <span>software engineering bootcamp</span> in 2021 at Fullstack Academy. 
                                Additionally, I earned my <span>B.S. in Computer Science</span>, graduating with <span>cum laude honors</span>, and a minor in Mathematics.
                                After completing my undergraduate studies, I pursued an <span>M.S. in Computer Science</span> at <span>USC</span>. 
                                During this time, I had the privilege of working as a <span>research scientist</span> with IBM over the summer. 
                                I am passionate about learning and growing as a developer because <span>programming is fun</span>!
                            </p>
                            <Button size="long" onClick={() => togglePopup() }>
                                <span>Current Skills</span>
                            </Button>
                        </BodySectionContainer>
                    </BodyContainer>
                    {/* ------------------------------------------------------------------------------------------------------------- */}
                    <Divider dividerFor="about">
                            <h2>
                                <span style={{ margin: '0px 5px'}}>01.</span><span style={{margin: '0px 5px 0px 0px', color: 'aliceblue'}}>About Me</span>
                            </h2>
                    </Divider>                     
                    <AboutContainer id="about" type="mobile">            
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
                                <span style={{ margin: '0px 5px'}}>02.</span><span style={{margin: '0px 5px 0px 0px', color: 'aliceblue'}}>Projects</span>
                            </h2>
                    </Divider>                      
                    <ProjectSectionContainer id="projects" type="mobile">
                        <Cards type="mobile">
                            <FullCardList type="mobile" />                                
                        </Cards>
                    </ProjectSectionContainer>
                    {/* ------------------------------------------------------------------------------------------------------------- */}
                    <Divider>
                            <h2>
                                <span style={{ margin: '0px 5px'}}>03.</span><span style={{margin: '0px 5px 0px 0px', color: 'aliceblue'}}>Contact</span>
                            </h2>
                        </Divider>   
                    <ContactSectionContainer id="contact" type="mobile">                        
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
        openSideBar: state.openNavSideBar
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // dispatching plain actions
        togglePopup: () => dispatch(togglePopup(true)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileFullPage);
