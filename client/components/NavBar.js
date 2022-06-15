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
import { HashLink } from "react-router-hash-link";
import { connect } from "react-redux";

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
        const { openSideBar } = this.props;
        const currentScrollPositon = window.scrollY;
        if (prevScrollPosition > currentScrollPositon) {
            if(Math.abs(prevScrollPosition - currentScrollPositon) > 5 || currentScrollPositon < 10) {
                this.setState({ isVisible: true });
            }
        }
        
        if (prevScrollPosition < currentScrollPositon && !openSideBar) {
            if(Math.abs(prevScrollPosition - currentScrollPositon) > 5) {
                this.setState({ isVisible: false });
            }            
        }

        this.setState({ prevScrollPosition: currentScrollPositon });
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    render() {
        const { type, openSideBar } = this.props;
        const { isVisible } = this.state;
        return (
            <NavBarContainer type={type} style={{ top: isVisible ? 0 : -100}}>
                <FullNavBar type={type}>
                    <ClickablePhotoOfMe isSideBarOpen={openSideBar} type={type}>
                        {(type === 'mobile') ? 
                        <HashLink smooth to="/#home">
                            <img
                                src={logo}
                                alt="a drawn image of me, image from: Sam Galang."
                            />
                        </HashLink>
                        :
                        <Link to="/">
                            <img
                                src={logo}
                                alt="a drawn image of me, image from: Sam Galang."
                            />
                        </Link>
                        }
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

const mapStateToProps = (state) => {
    return {
        openSideBar: state.openNavSideBar,
    };
};

export default connect(mapStateToProps, null)(NavBar);

