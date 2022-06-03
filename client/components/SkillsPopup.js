import React from "react";
import {
    PopupContainer,
    PopupLeftSide,
    PopupRightSide,
    PopupSectionContainer,
    PopupSectionNavBar,
    PopupSectionPrompt,
    PopupSectionBody,
    PopupSectionGrid,
    PopupSectionRow
} from "../styles/Popup.style";
import logo from "../icons/logo(2).png";
import exit from "../icons/exit_icon.png";
import Typewriter from 'typewriter-effect';

class SkillsPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFinishedTyping: false
        }
    }
    render() {
        const { isFinishedTyping } = this.state;

        return (
            <PopupContainer>
                <PopupSectionContainer>
                    <PopupSectionNavBar>
                        <PopupLeftSide>
                            <img src={logo} alt="logo of website"></img>
                            <span>guestuser@LAPTOP-IXR2A6GI:~/skills</span>                            
                        </PopupLeftSide>
                        <PopupRightSide>
                           <img src={exit} alt="exit button"></img> 
                        </PopupRightSide>                
                    </PopupSectionNavBar>
                    <PopupSectionPrompt>
                        <span style={{ color: "#c3e88d" }}>
                                guestuser@LAPTOP-IXR2A6GI
                        </span>
                        <span>:~/skills$ </span>  
  
                        {isFinishedTyping ? 'open_skills.sh' : <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString('open_skills.sh')
                                .callFunction(() => {
                                    this.setState({ isFinishedTyping: true })
                                })
                                .start();
                            }}/>
                        }           
                    </PopupSectionPrompt>
                    <PopupSectionBody>
                        {isFinishedTyping && <><span> {"> open_skills@1.0.0 start-dev /home/super-rogatory/portfolio_website"} </span>
                        <PopupSectionGrid>
                            <PopupSectionRow>
                                <span>JavaScript</span>
                                <span>React/Redux</span>
                                <span>PostgreSQL</span>
                            </PopupSectionRow>
                            <PopupSectionRow>
                                <span>Node.js</span>
                                <span>Redis</span>
                                <span>MySQL</span>
                            </PopupSectionRow>                            
                            <PopupSectionRow>
                                <span>Python</span>
                                <span>FastAPI</span>
                                <span>SQLite3</span>
                            </PopupSectionRow>
                            <PopupSectionRow>
                                <span>Git</span>
                                <span>Npm</span>
                                <span>Webpack</span>
                            </PopupSectionRow>                                                          
                        </PopupSectionGrid></>}
                    </PopupSectionBody>
                </PopupSectionContainer>
            </PopupContainer>
        );
    }
}

export default SkillsPopup;
