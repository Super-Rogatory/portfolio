import React from "react";
import {
    ProjectCard,
    ProjectCardImgSection,
    ProjectCardDescription,
    ProjectCardTechnologiesList,
    SpecialButton,
} from "../styles/ProjectCard.style";
import fortyfivepercent from "../icons/fortyfivepercent.png";
import wordle_backend from "../icons/wordlebackend.png";
import github from "../icons/github.png";
import nav_left_arrow from "../icons/nav_left_arrow.png";
import { connect } from 'react-redux';
import { forwardPage } from "../store/actions/actionCreators";

class Card3_4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onImgHover: false,
            imageNumber: 3,
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
        const { prevTwo, showNextTwoProjects } = this.props;
        return (
            <>
                <img
                    className="direction-arrow-left"
                    src={nav_left_arrow}
                    alt="a left arrow for navigation"
                    onClick={() => prevTwo(showNextTwoProjects)}
                ></img>                
                <ProjectCard>
                    <ProjectCardImgSection
                        dim={onImgHover && imageNumber === 3 ? 1 : 0}
                        onMouseLeave={() => this.hoverImage(false, 3)}
                    >
                        <img
                            src={fortyfivepercent}
                            alt="picture of forty five percent classifier program"
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
                            src={wordle_backend}
                            alt="picture of wordle_backend application"
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
                            Python FastAPI SQLite Redis Foreman Uvicorn Traefik
                        </span>
                    </ProjectCardTechnologiesList>
                </ProjectCard>
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        showNextTwoProjects: state.showNextTwoProjects
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        prevTwo: (status) => dispatch(forwardPage(status))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card3_4);

