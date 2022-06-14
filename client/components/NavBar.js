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
        this.state = {
            prevScrollPosition: 0,
            isVisible: true,
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    handleScroll() {
        const { prevScrollPosition } = this.state;
        const currentScrollPositon = window.scrollY;
        if (prevScrollPosition > currentScrollPositon || currentScrollPositon < 10) {
            this.setState({ isVisible: true });
        }
        
        if (prevScrollPosition < currentScrollPositon) {
            this.setState({ isVisible: false });
        }

        this.setState({ prevScrollPosition: currentScrollPositon });
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    render() {
        const { type } = this.props;
        const { isVisible } = this.state;
        return (
            <NavBarContainer type={type} style={{ top: isVisible ? 0 : -100}}>
                <FullNavBar type={type}>
                    <ClickablePhotoOfMe type={type}>
                        <Link to="/">
                            <img
                                src={logo}
                                alt="a drawn image of me, image from: Sam Galang."
                            />
                        </Link>
                    </ClickablePhotoOfMe>
                    <ClickableMenu type={type}>
                        {type === "mobile" ? (
                            <MobileNavBarLinks />
                        ) : (
                            <NavBarLinks />
                        )}
                    </ClickableMenu>
                </FullNavBar>
            </NavBarContainer>
        );
    }
}

export default NavBar;
