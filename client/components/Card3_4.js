import React from "react";
import {
    ProjectCard,
    ProjectCardImgSection,
    ProjectCardDescription,
    ProjectCardTechnologiesList,
    SpecialButton,
} from "../styles/ProjectCard.style";
import dinoguys from "../icons/dinoguys.png";
import chatterly from "../icons/chatterly.png";
import github from "../icons/github.png";
import external_link from "../icons/external_link.png";

class Card3_4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onImgHover: false,
            imageNumber: 3,
            showNextTwoProjects: false,
        };
    }

    hoverImage(isOn, imageNumber) {
        if (isOn) {
            this.setState({ onImgHover: true, imageNumber });
        } else {
            this.setState({ onImgHover: false, imageNumber });
        }
    }

    render() {
        const { imageNumber, onImgHover } = this.state;
        return (
            <>
                <ProjectCard>
                    <ProjectCardImgSection
                        dim={onImgHover && imageNumber === 3 ? 1 : 0}
                        onMouseLeave={() => this.hoverImage(false, 3)}
                    >
                        <img
                            src={dinoguys}
                            alt="picture of dino guys game"
                            onMouseEnter={() => this.hoverImage(true, 3)}
                        ></img>
                        {onImgHover && imageNumber === 3 && (
                            <SpecialButton>
                                <a
                                    href="https://github.com/super-rogatory/thepercentfortyfive"
                                    target="_blank"
                                >
                                    <img src={github} alt="github icon" />
                                </a>
                            </SpecialButton>
                        )}
                    </ProjectCardImgSection>
                    <ProjectCardDescription>
                        <h1>Percent 45</h1>
                        <span>
                            Percent 45 is an image classifying project that uses machine learning to guess the nature of any image.
                        </span>
                    </ProjectCardDescription>
                    <ProjectCardTechnologiesList>
                        <span>Python TensorFlow Keras FastAPI Foreman Uvicorn</span>
                    </ProjectCardTechnologiesList>
                </ProjectCard>
                <ProjectCard>
                    <ProjectCardImgSection
                        dim={onImgHover && imageNumber === 4 ? 1 : 0}
                        onMouseLeave={() => this.hoverImage(false, 4)}
                    >
                        <img
                            src={chatterly}
                            alt="picture of chatterly application"
                            onMouseEnter={() => this.hoverImage(true, 4)}
                        ></img>
                        {onImgHover && imageNumber === 4 && (
                            <SpecialButton>
                                <a
                                    href="https://github.com/super-rogatory/wordle_backend"
                                    target="_blank"
                                >
                                    <img src={github} alt="github icon" />
                                </a>
                            </SpecialButton>
                        )}
                    </ProjectCardImgSection>
                    <ProjectCardDescription>
                        <h1>Wordle Backend</h1>
                        <span>
                            Wordle Backend is a load-balanced microservice implementation of a backend for the wordle guessing game.
                        </span>
                    </ProjectCardDescription>
                    <ProjectCardTechnologiesList>
                        <span>
                            FastAPI SQLite Redis Foreman Uvicorn Traefik
                        </span>
                    </ProjectCardTechnologiesList>
                </ProjectCard>
            </>
        );
    }
}

export default Card3_4;
