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
import { TOGGLE_POPUP } from "../store/actions/actionTypes";
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
                        <Button size="long" onClick={() => togglePopup() }>
                            <span>Current Skills</span>
                        </Button>
                    </BodySectionContainer>
                    <ImgContainer dim={openPopup}>
                        <img
                            src={headshot}
                            alt="artistic photo of Chukwudi Ikem"
                        />
                    </ImgContainer>
                </BodyContainer>
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
      // dispatching plain actions
        togglePopup: () => dispatch(togglePopup(true)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FrontPage);
