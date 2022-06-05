import React from "react";
import { GlobalStyles } from "../styles/GlobalStyles.style";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Container, BodyContainer } from "../styles/FrontPage.style";
import {
    ProjectSectionContainer,
    ProjectCard,
    ProjectCardImgSection,
    ProjectCardDescription,
    ProjectCardTechnologiesList,
    Cards,
    SpecialButton,
} from "../styles/ProjectCard.style";
import dinoguys from "../icons/dinoguys.png";
import chatterly from "../icons/chatterly.png";

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onImgHover: false,
            onButtonHover: false,
            showButton: {
                isOn: false,
                imageNumber: 1,
            },
        };
    }

    hoverImage(isOn, imageNumber) {
        //
        if (isOn) {
            this.setState({ onImgHover: true });
            this.setState({ showButton: { isOn, imageNumber } });
        } else {
            if(this.state.onButtonHover){
                return;
            } else {
                this.setState({ onImgHover: false });
                this.setState({ showButton: { isOn: false, imageNumber: 1 } });                
            }


        }
    }

    render() {
        const { showButton, onImgHover } = this.state;

        return (
            <Container>
                <GlobalStyles />
                <NavBar />
                <BodyContainer>
                    <ProjectSectionContainer>
                        <Cards>
                            <ProjectCard>
                                <ProjectCardImgSection dim={onImgHover && showButton.imageNumber === 1 ? 1 : 0}>
                                    <img
                                        src={dinoguys}
                                        alt="picture of dino guys game"
                                        
                                        onMouseEnter={() =>
                                            this.hoverImage(true, 1)
                                        }
                                        onMouseLeave={() =>
                                            this.hoverImage(false, 1)
                                        }                                        
                                    ></img>
                                    {onImgHover &&
                                        showButton.imageNumber === 1 && (
                                            <SpecialButton
                                                onMouseEnter={() =>
                                                    this.setState({
                                                        onButtonHover: true,
                                                    })
                                                }
                                                onMouseLeave={() =>
                                                    this.setState({
                                                        onButtonHover: false,
                                                    })
                                                }
                                            ></SpecialButton>
                                        )}
                                </ProjectCardImgSection>
                                <ProjectCardDescription>
                                    <h1>DinoGuys</h1>
                                    <span>DinoGuys is..</span>
                                </ProjectCardDescription>
                                <ProjectCardTechnologiesList>
                                    <span>
                                        JavaScript Phaser3.js Socket.IO Tiled
                                        Express
                                    </span>
                                </ProjectCardTechnologiesList>
                            </ProjectCard>
                            <ProjectCard>
                                <ProjectCardImgSection dim={onImgHover && showButton.imageNumber === 2 ? 1 : 0}>
                                    <img
                                        src={chatterly}
                                        alt="picture of chatterly application"                
                                        onMouseEnter={() =>
                                            this.hoverImage(true, 2)
                                        }
                                        onMouseLeave={() =>
                                            this.hoverImage(false, 2)
                                        }                                        
                                    ></img>
                                    {onImgHover &&
                                        showButton.imageNumber === 2 && (
                                            <SpecialButton
                                                onMouseEnter={() =>
                                                    this.setState({
                                                        onButtonHover: true,
                                                    })
                                                }
                                                onMouseLeave={() =>
                                                    this.setState({
                                                        onButtonHover: false,
                                                    })
                                                }
                                            ></SpecialButton>
                                        )}
                                </ProjectCardImgSection>
                                <ProjectCardDescription>
                                    <h1>WeChatterly</h1>
                                    <span>WeChatterly is..</span>
                                </ProjectCardDescription>
                                <ProjectCardTechnologiesList>
                                    <span>
                                        React Express Socket.IO Webpack
                                    </span>
                                </ProjectCardTechnologiesList>
                            </ProjectCard>                                                            
                        </Cards>
                    </ProjectSectionContainer>
                </BodyContainer>
                <Footer />
            </Container>
        );
    }
}

export default Project;
