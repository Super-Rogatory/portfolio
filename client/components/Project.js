import React from "react";
import { GlobalStyles } from "../styles/GlobalStyles.style";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Container, BodyContainer } from "../styles/FrontPage.style";
import { ProjectSectionContainer, Cards } from "../styles/ProjectCard.style";

import nav_right_arrow from "../icons/nav_right_arrow.png";
import nav_left_arrow from "../icons/nav_left_arrow.png";
import Cards1_2 from "./Card1_2";
import Cards3_4 from "./Card3_4";

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showNextTwoProjects: false,
        };
    }

    render() {
        const { showNextTwoProjects } = this.state;
        return (
            <Container>
                <GlobalStyles />
                <NavBar />
                <BodyContainer>
                    <ProjectSectionContainer>
                        {showNextTwoProjects ? (
                            <img
                                className="direction-arrow-left"
                                src={nav_left_arrow}
                                alt="a left arrow for navigation"
                                onClick={() =>
                                    this.setState({
                                        showNextTwoProjects: false,
                                    })
                                }
                            ></img>
                        ) : (
                            <img
                                className="direction-arrow-right"
                                src={nav_right_arrow}
                                alt="a right arrow for navigation"
                                onClick={() =>
                                    this.setState({ showNextTwoProjects: true })
                                }
                            ></img>
                        )}
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

export default Project;
