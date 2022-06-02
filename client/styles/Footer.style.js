import styled from 'styled-components';

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20vh;
`

export const FooterSectionContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 50%;    
    & img {
        width: 50px;
        height: 50px;
        filter: opacity(1) drop-shadow(0px 0px 1px #99a8e8); 
        cursor: pointer; 
    }

    & img:hover {
        filter: opacity(1) drop-shadow(0px 0px 2px #99a8e8);  
        transition: 0.5s;
    }
`