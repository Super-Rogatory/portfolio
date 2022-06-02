import React from 'react';
import { FooterContainer, FooterSectionContainer } from '../styles/Footer.style';
import github from '../icons/github.png';
import linkedin from '../icons/linkedin.png';
import tiktok from '../icons/tiktok.png';

class Footer extends React.Component {
    render() {
        return (
            <FooterContainer>
                <FooterSectionContainer>
                    <img src={github} alt="github icon" />
                    <img src={linkedin} alt="linkedin icon" />
                    <img src={tiktok} alt="tiktok icon" />
                </FooterSectionContainer>
            </FooterContainer>
        )
    }
}

export default Footer;