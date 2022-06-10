import React from 'react';
import { FooterContainer, FooterSectionContainer } from '../styles/Footer.style';
import github from '../icons/github.png';
import linkedin from '../icons/linkedin.png';
import tiktok from '../icons/tiktok.png';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { type, dim } = this.props;
        return (
            <FooterContainer type={type}>
                <FooterSectionContainer dim={dim}>
                    <a href="https://github.com/Super-Rogatory" target="_blank">
                        <img src={github} alt="github icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/chukwudiikem/" target="_blank">
                        <img src={linkedin} alt="linkedin icon" />
                    </a>
                    <a href="https://www.tiktok.com/@blackunderflow" target="_blank">
                        <img src={tiktok} alt="tiktok icon" /> 
                    </a>            
                </FooterSectionContainer>
            </FooterContainer>
        )
    }
}

export default Footer;