import React from "react";
import {
    ProjectCard,
    ProjectCardImgSection,
    ProjectCardDescription,
    ProjectCardTechnologiesList,
    SpecialButton,
} from "../styles/ProjectCard.style";
import MediaQuery from 'react-responsive';
import dinoguys from "../icons/dinoguys.png";
import chatterly from "../icons/chatterly.png";
import github from "../icons/github.png";
import external_link from "../icons/external_link.png";
import nav_right_arrow from "../icons/nav_right_arrow.png";
import { connect } from 'react-redux';
import { rewindPage } from "../store/actions/actionCreators";

class Cards1_2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onImgHover: false,
            imageNumber: 1,
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
        const { nextTwo, showNextTwoProjects} = this.props;
        return (
            <>
            <MediaQuery maxWidth={1268}>
                Hi
            </MediaQuery>

            <MediaQuery minWidth={1269}>
                <img
                    className="direction-arrow-right"
                    src={nav_right_arrow}
                    alt="a right arrow for navigation"
                    onClick={() => nextTwo(showNextTwoProjects)}
                ></img>
                <ProjectCard>
                    <ProjectCardImgSection
                        dim={onImgHover && imageNumber === 1 ? 1 : 0}
                        onMouseLeave={() => this.hoverImage(false, 1)}
                    >
                        <img
                            src={dinoguys}
                            alt="picture of dino guys game"
                            onMouseEnter={() => this.hoverImage(true, 1)}
                        ></img>
                        {onImgHover && imageNumber === 1 && (
                            <SpecialButton>
                                <a
                                    href="https://github.com/potatoes-team/dinoguys"
                                    target="_blank"
                                >
                                    <img src={github} alt="github icon" />
                                </a>
                                <a
                                    href="https://dinoguys.herokuapp.com"
                                    target="_blank"
                                >
                                    <img
                                        src={external_link}
                                        alt="external link icon"
                                    />
                                </a>
                            </SpecialButton>
                        )}
                    </ProjectCardImgSection>
                    <ProjectCardDescription>
                        <h1>DinoGuys</h1>
                        <span>
                            DinoGuys is a 2D platformer battle royale style game
                            where friends can compete to see who can make it to
                            the finish line first!
                        </span>
                    </ProjectCardDescription>
                    <ProjectCardTechnologiesList>
                        <span>JavaScript Express Phaser3 Socket.IO Tiled</span>
                    </ProjectCardTechnologiesList>
                </ProjectCard>
                <ProjectCard>
                    <ProjectCardImgSection
                        dim={onImgHover && imageNumber === 2 ? 1 : 0}
                        onMouseLeave={() => this.hoverImage(false, 2)}
                    >
                        <img
                            src={chatterly}
                            alt="picture of chatterly application"
                            onMouseEnter={() => this.hoverImage(true, 2)}
                        ></img>
                        {onImgHover && imageNumber === 2 && (
                            <SpecialButton>
                                <a
                                    href="https://github.com/Super-Rogatory/chatterly"
                                    target="_blank"
                                >
                                    <img src={github} alt="github icon" />
                                </a>
                                <a
                                    href="https://wechatterly.herokuapp.com"
                                    target="_blank"
                                >
                                    <img
                                        src={external_link}
                                        alt="external link icon"
                                    />
                                </a>
                            </SpecialButton>
                        )}
                    </ProjectCardImgSection>
                    <ProjectCardDescription>
                        <h1>WeChatterly</h1>
                        <span>
                            WeChatterly is a web socket based chat application
                            that allows users to join rooms with friends and
                            talk online together.
                        </span>
                    </ProjectCardDescription>
                    <ProjectCardTechnologiesList>
                        <span>
                            React/Redux Express Socket.IO Sequelize(PostgreSQL)
                        </span>
                    </ProjectCardTechnologiesList>
                </ProjectCard>
            </MediaQuery>
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
        nextTwo: (status) => dispatch(rewindPage(status))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards1_2);

