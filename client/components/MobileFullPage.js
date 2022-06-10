import React from "react";
import { GlobalStyles } from "../styles/GlobalStyles.style";
import NavBar from "./NavBar";
import Footer from "./Footer";
import {
    Container,
    BodyContainer,
    BodySectionContainer,
} from "../styles/FrontPage.style";
import MediaQuery from "react-responsive";
import { connect } from "react-redux";
import { togglePopup } from "../store/actions/actionCreators";
import { Button } from "../styles/NavBar.style";
import SkillsPopup from "./SkillsPopup";

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
                {openPopup && <SkillsPopup type="mobile" />}
                <BodyContainer type="mobile">
                    <BodySectionContainer type="mobile">
                        <MediaQuery minHeight={420}>
                            <h6>Hello there! My name is</h6>
                        </MediaQuery>

                        <h1 style={{ color: "aliceblue", fontSize: "2rem" }}>Chukwudi Ikem.</h1>
                        <h1 style={{ color: "#D3D3D3", fontSize: "1rem" }}>
                            New grad software engineer.
                        </h1>
                        <p>
                            I graduated cum laude honors with a B.S. in Computer
                            Science and a minor in Mathematics. I also graduated
                            from a software engineering bootcamp back in 2021
                            from Fullstack Academy. I strive to learn and grow
                            as a developer because programming is fun!
                        </p>
                        <MediaQuery minHeight={450}>
                                <Button size="long" onClick={() => togglePopup() }>
                                    <span>Current Skills</span>
                                </Button>
                        </MediaQuery>                        
                    </BodySectionContainer>
                    
                </BodyContainer>

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
