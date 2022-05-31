import React from "react";
import {
    NavBarContainer,
    FullNavBar,
    ClickablePhotoOfMe,
    ClickableMenu,
    Button,
} from "./NavBar.style";
import me from "../icons/me.png";

class NavBar extends React.Component {
    render() {
        return (
            <NavBarContainer>
                <FullNavBar>
                    <ClickablePhotoOfMe>
                        <img
                            src={me}
                            alt="a drawn image of me, image from: Sam Galang."
                        />
                    </ClickablePhotoOfMe>
                    <ClickableMenu>
                        <ul>
                            <li>
                                <span>01. </span>About
                            </li>
                            <li>
                                <span>02. </span>Projects
                            </li>
                            <li>
                                <span>03. </span>Contact
                            </li>
                            <li>
                                <Button>Resume</Button>
                            </li>
                        </ul>
                    </ClickableMenu>
                </FullNavBar>
            </NavBarContainer>
        );
    }
}

export default NavBar;
