import styled from "styled-components";

export const MobileNavBarContainer = styled.div`
    width: auto;
    & img {
        width: 50px;
        height: 50px;
        filter: invert(67%) sepia(15%) saturate(3715%) hue-rotate(197deg)
            brightness(109%) contrast(82%);        
    }
`;

export const Divider = styled.div`
    ${(props) => props.dividerFor === 'about' ? `margin-top: calc(150px + 20vh);` : `margin-top: 150px;`}    
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
        margin: 0 5px;
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
