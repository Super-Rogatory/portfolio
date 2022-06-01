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
        border: 1px solid #616b93;
        border-radius: 100%;
        box-shadow: 0px 0px 5px 2px #616b93;
    } 
    & img:hover {
        transform: scale(1.2);
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
    & li:hover {
        color: #99a8e8;
        transition: 0.5s;
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
    height: 50px;
    &:hover {
        background-color: rgba(153,168,232,0.1);
        transition: 0.5s;
    }
    & span {
        z-index: 1;
    }
`