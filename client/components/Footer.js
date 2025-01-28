import React from 'react';
import { FooterContainer, FooterSectionContainer } from '../styles/Footer.style';
import github from '../icons/github.png';
import linkedin from '../icons/linkedin.png';
import youtube from '../icons/youtube.png';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { type, dim } = this.props;
        return (
            <FooterContainer id="socials" type={type}>
                <FooterSectionContainer type={type} dim={dim}>
                    <a href="https://github.com/Super-Rogatory" target="_blank">
                        <img src={github} alt="github icon created by Agata Kuczmińska" />
                    </a>
                    <a href="https://www.linkedin.com/in/chukwudiikem/" target="_blank">
                        <img src={linkedin} alt="linkedin icon created by Agata Kuczmińska" />
                    </a>
                    <a href="https://www.youtube.com/@theblackunderflow1842" target="_blank">
                        <img src={youtube} alt="youtube icon created by Agata Kuczmińska" /> 
                    </a>            
                </FooterSectionContainer>
            </FooterContainer>
        )
    }
}

export default Footer;