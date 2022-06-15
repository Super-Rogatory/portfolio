import styled from "styled-components";

export const MobileNavBarContainer = styled.div`
    width: auto;
`;

export const MobileNavBarBodyContainer = styled.nav`
    position: fixed;
    top: 100px;
    bottom: 0px;
    right: 0px;
    height: 100vh;
    width: 100vw;
    background-color: rgba(41,45,62,1);
    & div {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%; 
    }
    & ul {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 70%;
        padding: 0;
        margin: 0;
        list-style: none;
    }
    & a {
        text-decoration: none;
        color: aliceblue;
        font-weight: 400;
    }    

    & li {
        margin: 20px 0px;  
        width: 300px;
        text-align: center; 
        
    }
    & a > span {
        text-shadow: 0px 0px 10px #99a8e8; 
    }

`;

export const MobileNavBarImageContainer = styled.div`
    & > img {
        ${(props) => props.imgType === 'exit' ? 
        `       
            width: 28px;
            height: 28px;
            margin-right: 10px;
            z-index: 3;
            transition: 0.25s;
        `   
        : 
        `
            width: 50px;
            height: 50px;
            transition: 0.25s;
        `
        }
        filter: invert(67%) sepia(15%) saturate(3715%) hue-rotate(197deg)
            brightness(109%) contrast(82%);  

        cursor: pointer;
    }
`;
export const Divider = styled.div`
    ${(props) => props.dividerFor === 'about' ? `margin-top: calc(60px + 20vh);` : `margin-top: 60px;`}
    & h2 {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #D3D3D3;
        font-size: 1rem;
    }
    & h2 span {
        color: #99a8e8;
        background-color: rgba(41,45,62,1);
        font-size: 1rem;
    }
    & h2:before,
    h2:after {
        background: black;
        height: 2px;
        flex: 1;
        content: "";
    }
    & h2.left:after {
        background: none;
    }
    & h2.right:before {
        background: none;
    }
`;
