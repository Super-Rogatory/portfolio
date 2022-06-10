import React from "react";
import {
    NavBarContainer,
    FullNavBar,
    ClickablePhotoOfMe,
    ClickableMenu,
} from "../styles/NavBar.style";
import logo from "../icons/logo(2).png";
import { Link } from "react-router-dom";
import NavBarLinks from "./NavBarLinks";
import MobileNavBarLinks from "./MobileNavBarLinks";
        
class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { type } = this.props;
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
                        {type === 'mobile' ? <MobileNavBarLinks/> : <NavBarLinks/> }
                    </ClickableMenu>
                </FullNavBar>
            </NavBarContainer>
        );
    }
}

export default NavBar;
