import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../styles/NavBar.style";

class NavBarLinks extends React.Component {
    render() {
        return (
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
        );
    }
}

export default NavBarLinks;