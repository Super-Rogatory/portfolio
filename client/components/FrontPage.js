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
import SkillsPopup from "./SkillsPopup";
import MediaQuery from 'react-responsive';
import { connect } from "react-redux";
import { togglePopup } from "../store/actions/actionCreators";

class FrontPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { openPopup, togglePopup } = this.props;
        return (
            <Container>
                <GlobalStyles />
                <NavBar />
                {openPopup && <SkillsPopup />}
                <MediaQuery maxHeight={270}>
                    <h6 style={{ color: "aliceblue", textAlign: "center" }}>Expand browser for more information!</h6>
                </MediaQuery>
                <MediaQuery minHeight={270} minWidth={769}>
                    <BodyContainer>
                        <BodySectionContainer>
                            <MediaQuery minHeight={620}>
                                <h6>Hello there! My name is</h6>
                            </MediaQuery>
                            
                            <h1 style={{ color: "aliceblue" }}>Chukwudi Makuo Ikem.</h1>
                            <h1 style={{ color: "#D3D3D3" }}>
                                I am a new grad software engineer.
                            </h1>
                            <p>
                                I graduated from a <span>software engineering bootcamp</span> in 2021 at Fullstack Academy. 
                                Additionally, I earned my <span>B.S. in Computer Science</span>, graduating with <span>cum laude honors</span>, and a minor in Mathematics.
                                After completing my undergraduate studies, I pursued an <span>M.S. in Computer Science</span> at <span>USC</span>. 
                                During this time, I had the privilege of working as a <span>research scientist</span> with IBM over the summer. 
                                I am passionate about learning and growing as a developer because <span>programming is fun</span>!
                            </p>
                                <MediaQuery minHeight={560}>
                                    <Button size="long" onClick={() => togglePopup() }>
                                        <span>Current Skills</span>
                                    </Button>
                                </MediaQuery>
                        </BodySectionContainer>
                        <ImgContainer dim={openPopup}>
                            <img
                                src={headshot}
                                alt="artistic photo of Chukwudi Ikem"
                            />
                        </ImgContainer>
                    </BodyContainer>                    
                </MediaQuery>
                <Footer dim={openPopup} />
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        openPopup: state.openPopup
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        togglePopup: () => dispatch(togglePopup(true))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FrontPage);
