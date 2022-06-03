import React from "react";
import {
    PopupContainer,
    PopupLeftSide,
    PopupRightSide,
    PopupSectionContainer,
    PopupSectionNavBar,
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
                        
                        {/* <span style={{ color: "black" }}>
                            guestuser@LAPTOP-IXR2A6GI:
                        </span>
                        <span style={{ color: "darkblue" }}>~/skills$</span> */}
                    </PopupSectionNavBar>
                </PopupSectionContainer>
            </PopupContainer>
        );
    }
}

export default SkillsPopup;
