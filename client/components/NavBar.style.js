import styled from 'styled-components';

export const Container = styled.div`
    font-weight: 900;
    width: 100vw;
    height: 100vh;
    background-color: rgba(41,45,62,255);
`;


export const FullNavBar = styled.div`
    display: flex;
    color: #616b93;
    width: 95%;
    height: auto;
    margin: auto;
    justify-content: space-between;
    align-items: center;
`;

export const NavBarContainer = styled.div`
    width: 100%;
`;

export const ClickablePhotoOfMe = styled.div`
    width: 100px;
    height: auto;
    display: flex;
    justify-content: center;
    
    padding-top: 35px;
    & img {
        width: 65px;
        height: 65px;
        border: 1px solid #616b93;
        border-radius: 100%;
        box-shadow: 0px 0px 10px 2px #616b93;
    } 
    & img:hover {
        transform: scale(1.3);
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
        font-size: 14px;
        font-weight: 500;
        list-style: none;
        color: aliceblue;
    }
    & span {
        color: #99a8e8;
    }
`

export const Button = styled.button`
    border: 2px solid #99a8e8;
    border-radius: 8px;
    text-align: center;
    color: #99a8e8;
    background-color: rgba(41,45,62,255);
    font-weight: 800;
    width: 100px;
    height: 50px;
`