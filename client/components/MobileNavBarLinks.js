import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import hamburger_icon from '../icons/hamburger_icon.png';
import { MobileNavBarContainer } from "../styles/MobileNavBar.style";
import { Button } from "../styles/NavBar.style";

class MobileNavBarLinks extends React.Component {
    render() {
        return (
            <MobileNavBarContainer>
                <img src={hamburger_icon} alt="hamburger_icon"></img>
                {/* <ul>
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
                </ul> */}
            </MobileNavBarContainer>
        );
    }
}

export default MobileNavBarLinks;