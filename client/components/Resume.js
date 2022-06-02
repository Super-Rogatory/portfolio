import React from "react";
import { GlobalStyles } from "../styles/GlobalStyles.style";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Container } from "../styles/FrontPage.style";
import resume from "../files/resume.pdf";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

class Resume extends React.Component {
    render() {
        return (
            <Container>
                <GlobalStyles />
                <NavBar />
                <Document file={resume}>
                    <Page pageNumber={1} />
                </Document>
                <Footer />
            </Container>
        );
    }
}

export default Resume;
