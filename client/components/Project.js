import React from "react";
import { GlobalStyles } from "../styles/GlobalStyles.style";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Container, BodyContainer } from "../styles/FrontPage.style";
import {
    ProjectSectionContainer,
    ProjectCard,
    Cards
} from "../styles/ProjectCard.style";
import dinoguys from '../icons/dinoguys.png';
import chatterly from '../icons/chatterly.png';

class Project extends React.Component {
    render() {
        return (
            <Container>
                <GlobalStyles />
                <NavBar />
                <BodyContainer>
                    <ProjectSectionContainer>
                        <Cards>
                           <ProjectCard><img src={dinoguys} alt="picture of dino guys game"></img>DinoGuys</ProjectCard> 
                           <ProjectCard><img src={chatterly} alt="picture of chatterly application"></img>WeChatterly</ProjectCard> 
                        </Cards>
                    </ProjectSectionContainer>
                </BodyContainer>
                <Footer />
            </Container>
        );
    }
}

export default Project;
