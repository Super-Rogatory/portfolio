import styled from 'styled-components';

export const FullNavBar = styled.div`
    display: flex;
    color: #616b93;
    width: 95%;
    height: 15vh;
    margin: auto;
    justify-content: space-between;
    align-items: center;
`;

export const NavBarContainer = styled.div`
    width: 100%;
`;

export const ClickablePhotoOfMe = styled.div`
    width: 100px;
    height: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    & img {
        width: 65px;
        height: 65px;
        max-height: 10vh;
        filter: opacity(1) drop-shadow(0px 0px 2px #99a8e8); 
    } 
    & img:hover {
        transform: scale(1.2);
    }
    @media only screen and (max-height: 650px) {        
        & img {
            width: 100%;
            height: 100%; 
            min-height: 32px;
            min-width: 32px;
        } 
    }

`

export const ClickableMenu = styled.div`
    & ul {   
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 600px;
        margin: 0;
        padding: 0;
        font-size: 15px;
        font-weight: 500;
        list-style: none;
        color: aliceblue;
    }
    & span {
        color: #99a8e8;
    }   

    & li:hover {
        color: #99a8e8;
        transition: 0.5s;
    }
    & a {
        text-decoration: none;
        color: inherit;
        margin: 0px;
        padding: 0px;
    }
`

export const Button = styled.button`
    border: 2px solid #99a8e8;
    border-radius: 8px;
    text-align: center;
    color: #99a8e8;
    background-color: rgba(41,45,62,255);
    font-weight: 800;
    width: ${(props) => props.size === "small" ? 100 : 200}px;
    min-height: 50px;
    cursor: pointer;
    &:hover {
        background-color: rgba(153,168,232,0.1);
        transition: 0.5s;
    }
    & span {
        z-index: 1;
    }
`