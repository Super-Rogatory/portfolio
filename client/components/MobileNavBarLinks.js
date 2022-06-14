import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import hamburger_icon from '../icons/hamburger_icon.png';
import { toggleMobileNavPopup } from "../store/actions/actionCreators";
import { MobileNavBarContainer, MobileNavBarBodyContainer, MobileNavBarImageContainer } from "../styles/MobileFullPage.style";
import { Button } from "../styles/NavBar.style";

class MobileNavBarLinks extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { openSideBar, toggleSideBar } = this.props;
        return (
            <MobileNavBarContainer>
                <MobileNavBarBodyContainer>                
                    <MobileNavBarImageContainer>
                        <img onClick={() => toggleSideBar(openSideBar)} src={hamburger_icon} alt="hamburger_icon"></img>
                    </MobileNavBarImageContainer>
                    {openSideBar && 'l'}
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
                </MobileNavBarBodyContainer>
                

            </MobileNavBarContainer>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        openSideBar: state.openNavSideBar
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleSideBar: (status) => dispatch(toggleMobileNavPopup(status))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileNavBarLinks);