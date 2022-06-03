import React from "react";
import {
    PopupContainer,
    PopupLeftSide,
    PopupRightSide,
    PopupSectionContainer,
    PopupSectionNavBar,
    PopupSectionBody
} from "../styles/Popup.style";
import logo from "../icons/logo(2).png";
import exit from "../icons/exit_icon.png";

class SkillsPopup extends React.Component {
    render() {
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
                    <PopupSectionBody>
                        <span style={{ color: "#c3e88d" }}>
                                guestuser@LAPTOP-IXR2A6GI
                        </span>:
                        <span>~/skills</span>$                   
                    </PopupSectionBody>
                </PopupSectionContainer>
            </PopupContainer>
        );
    }
}

export default SkillsPopup;
