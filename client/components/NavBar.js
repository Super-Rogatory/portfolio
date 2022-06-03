import React from "react";
import {
    NavBarContainer,
    FullNavBar,
    ClickablePhotoOfMe,
    ClickableMenu,
    Button,
} from "../styles/NavBar.style";
import logo from "../icons/logo(2).png";
import { Link } from "react-router-dom";


class NavBar extends React.Component {
    render() {
        return (
            <NavBarContainer>
                <FullNavBar>
                    <ClickablePhotoOfMe>
                        <Link to="/">
                            <img
                                src={logo}
                                alt="a drawn image of me, image from: Sam Galang."
                            />
                        </Link>
                    </ClickablePhotoOfMe>
                    <ClickableMenu>
                        <ul>
                            <Link to="/about">
                                <li>
                                    <span>01. </span>About
                                </li>
                            </Link>
                            <Link to="/project">
                                <li>
                                    <span>02. </span>Projects
                                </li>
                            </Link>
                            <Link to="/contact">
                                <li>
                                    <span>03. </span>Contact
                                </li>
                            </Link>

                            <Link to="/resume.pdf" target="_blank">
                                <li>
                                    <Button size="small">
                                        <span>Resume</span>
                                    </Button>
                                </li>
                            </Link>
                        </ul>
                    </ClickableMenu>
                </FullNavBar>
            </NavBarContainer>
        );
    }
}

export default NavBar;
