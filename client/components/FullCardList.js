import React from 'react';

import {
    ProjectCard,
    ProjectCardImgSection,
    ProjectCardDescription,
    ProjectCardTechnologiesList,
    SpecialButton,
} from "../styles/ProjectCard.style";
import MediaQuery from 'react-responsive';
import github from "../icons/github.png";
import external_link from "../icons/external_link.png";
import nav_left_arrow from "../icons/nav_left_arrow.png";
import nav_right_arrow from "../icons/nav_right_arrow.png";
import allCardDescriptions from '../utils/allCardDescriptions';

class FullCardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onImgHover: false,
            imageNumber: 1,
            currentProjectNumber: 0,
            maxProjectNumber: allCardDescriptions.length - 1
        };
    }

    hoverImage(isOn, imageNumber) {
        if (isOn) {
            this.setState({ onImgHover: true, imageNumber });
        } else {
            this.setState({ onImgHover: false, imageNumber });
        }
    }

    localMoveTwo({ direction }) {
        switch(direction) {
            case 'forward':
                if(this.state.currentProjectNumber < this.state.maxProjectNumber) {
                    this.setState({ currentProjectNumber: this.state.currentProjectNumber + 1});
                }
                break;
            case 'back':
                if(this.state.currentProjectNumber > 0) {
                    this.setState({ currentProjectNumber: this.state.currentProjectNumber - 1});
                }
                break;
        }
    }

    render() {
        const { imageNumber, onImgHover, currentProjectNumber } = this.state;
        return (
            <>
                <img
                    className="direction-arrow-left"
                    src={nav_left_arrow}
                    alt="a left arrow for navigation"
                    onClick={() => this.localMoveTwo({ direction: 'back' })}
                ></img>

                <img
                    className="direction-arrow-right"
                    src={nav_right_arrow}
                    alt="a right arrow for navigation"
                    onClick={() => this.localMoveTwo({ direction: 'forward' })}
                ></img>                
                {allCardDescriptions.map((card, index) => 
                    index === currentProjectNumber &&
                    <ProjectCard type="vertical_view" key={index}>
                        <MediaQuery minHeight={530}>
                            <ProjectCardImgSection
                                dim={onImgHover && imageNumber === index ? 1 : 0}
                                onMouseLeave={() => this.hoverImage(false, index)}
                            >                            
                                <img
                                    src={card.src}
                                    alt={card.alt}
                                    onMouseEnter={() => this.hoverImage(true, index)}
                                ></img>
                                {onImgHover && imageNumber === index && (
                                    <SpecialButton>
                                        <a
                                            href={card.gitHubLink}
                                            target="_blank"
                                        >
                                            <img src={github} alt="github icon" />
                                        </a>
                                        {card.demoLink &&
                                            <a
                                                href={card.demoLink}
                                                target="_blank"
                                            >
                                                <img
                                                    src={external_link}
                                                    alt="external link icon"
                                                />
                                            </a>
                                        }
                                    </SpecialButton>
                                )}
                            </ProjectCardImgSection>
                        </MediaQuery>
                        <ProjectCardDescription>
                            <h1>{card.title}</h1>
                            <span>
                                {card.description}
                            </span>
                        </ProjectCardDescription>
                        <ProjectCardTechnologiesList>
                            <span>{card.techStack}</span>
                        </ProjectCardTechnologiesList>
                </ProjectCard>
                                    
                )}
            </>                
                      
        );
    }
}


export default FullCardList;