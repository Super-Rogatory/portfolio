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
import arrow from "../icons/right_arrow.png";
import Typewriter from 'typewriter-effect';
import { TOGGLE_POPUP } from "../store/actions/actionTypes";
import { connect } from "react-redux";

class SkillsPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFinishedTyping: false
        }
    }
    render() {
        const { isFinishedTyping } = this.state;
        const { togglePopup } = this.props;
        return (
            <PopupContainer>
                <PopupSectionContainer>
                    <PopupSectionNavBar>
                        <PopupLeftSide>
                            <img src={logo} alt="logo of website"></img>
                            <span>guestuser@LAPTOP-IXR2A6GI:~/skills</span>                            
                        </PopupLeftSide>
                        <PopupRightSide>
                           <img src={exit} alt="exit button" onClick={() => togglePopup() }></img> 
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
                        {isFinishedTyping && <><span> {"> open_skills@1.0.0 start /home/guestuser/skills"} </span>
                        <PopupSectionGrid>
                            <PopupSectionRow>
                                <span><img src={arrow} alt="picture of right arrow"></img>{"JavaScript"}</span>
                                <span><img src={arrow} alt="picture of right arrow"></img>{"React/Redux"}</span>
                                <span><img src={arrow} alt="picture of right arrow"></img>{"Express.js"}</span>
                            </PopupSectionRow>                            
                            <PopupSectionRow>
                                <span><img src={arrow} alt="picture of right arrow"></img>{"Python"}</span>
                                <span><img src={arrow} alt="picture of right arrow"></img>{"FastAPI"}</span>
                                <span><img src={arrow} alt="picture of right arrow"></img>{"Redis"}</span>
                            </PopupSectionRow>
                            <PopupSectionRow>
                                <span><img src={arrow} alt="picture of right arrow"></img>{"PostgreSQL"}</span>
                                <span><img src={arrow} alt="picture of right arrow"></img>{"SQLite3"}</span>
                                <span><img src={arrow} alt="picture of right arrow"></img>{"MySQL"}</span>
                            </PopupSectionRow>                            
                            <PopupSectionRow>
                                <span><img src={arrow} alt="picture of right arrow"></img>{"Git"}</span>
                                <span><img src={arrow} alt="picture of right arrow"></img>{"Node.js/npm"}</span>
                                <span><img src={arrow} alt="picture of right arrow"></img>{"Webpack"}</span>
                            </PopupSectionRow>                                                          
                        </PopupSectionGrid></>}
                    </PopupSectionBody>
                </PopupSectionContainer>
            </PopupContainer>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        openPopup: state.openPopup
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        togglePopup: () => dispatch({ type: TOGGLE_POPUP, status: false })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillsPopup);
