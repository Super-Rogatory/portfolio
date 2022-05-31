import React from "react";
import { NavBar, Container } from "./FrontPage.style";
import { GlobalStyles } from "./GlobalStyles.style";

class FrontPage extends React.Component {
    render() {
        return (
            <>
                <GlobalStyles />
                <Container>
                    <NavBar>Hi</NavBar>
                </Container>
            </>
        );
    }
}

export default FrontPage;
