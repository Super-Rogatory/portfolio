import React from "react";
import { GlobalStyles } from "../styles/GlobalStyles.style";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Container, BodyContainer } from "../styles/FrontPage.style";
import { ProjectSectionContainer, Cards } from "../styles/ProjectCard.style";
import Cards1_2 from "./Card1_2";
import Cards3_4 from "./Card3_4";
import { connect } from 'react-redux';

class Project extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { showNextTwoProjects } = this.props;
        return (
            <Container>
                <GlobalStyles />
                <NavBar />
                <BodyContainer>
                    <ProjectSectionContainer>
                        <Cards>
                            {showNextTwoProjects ? <Cards3_4 /> : <Cards1_2 />}
                        </Cards>
                    </ProjectSectionContainer>
                </BodyContainer>
                <Footer />
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        showNextTwoProjects: state.showNextTwoProjects
    }
}

export default connect(mapStateToProps, null)(Project);
