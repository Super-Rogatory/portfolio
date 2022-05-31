import React from "react";
import { Container } from "./NavBar.style";
import { GlobalStyles } from "./GlobalStyles.style";
import NavBar from "./NavBar";

class FrontPage extends React.Component {
    render() {
        return (
            <Container>
                <GlobalStyles />
                <NavBar />
            </Container>
        );
    }
}

export default FrontPage;
