import React from "react";
import {
    Container,
    NavBarContainer,
    NavBar,
    ClickablePhotoOfMe,
    ClickableMenu,
    Button
} from "./FrontPage.style";
import { GlobalStyles } from "./GlobalStyles.style";
import me from "../icons/me.png";

class FrontPage extends React.Component {
    render() {
        return (
            <Container>
                <GlobalStyles />
                <NavBarContainer>
                    <NavBar>
                        <ClickablePhotoOfMe>
                            <img
                                src={me}
                                alt="a drawn image of me, image from: Sam Galang."
                            />
                        </ClickablePhotoOfMe>
                        <ClickableMenu>
                            <ul>
                                <li><span>01. </span>About</li>
                                <li><span>02. </span>Projects</li>
                                <li><span>03. </span>Contact</li>
                                <li><Button>Resume</Button></li>
                            </ul>
                        </ClickableMenu>
                    </NavBar>
                </NavBarContainer>
            </Container>
        );
    }
}

export default FrontPage;
