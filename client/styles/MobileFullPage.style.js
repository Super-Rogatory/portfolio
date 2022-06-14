import styled from "styled-components";

export const MobileNavBarContainer = styled.div`
    width: auto;
    
`;

export const MobileNavBarBodyContainer = styled.nav`
    position: fixed;
    top: 100px;
    right: 0;
    height: 100vh;
    width: 100vw;
    transition: 2s;
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
