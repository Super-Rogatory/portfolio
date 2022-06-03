import styled from 'styled-components';

export const Container = styled.div`
    font-weight: 900;
    width: 100vw;
    height: 100vh;
    background-color: rgba(41,45,62,255);
`;

export const BodyContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 65vh;
`
export const BodySectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 65%;
    height: 100%;
    & h6 {
        margin-top: 20px;
        margin-bottom: 0px;
        font-weight: 400;
        color: #99a8e8;
    }
    & h1 {
        margin-top: 40px;
        margin-bottom: 0px;
        font-size: 2em;
        font-weight: 400;
        
    }
    & p {
        margin-top: 30px;
        font-size: 0.6em;
        width: 500px;
        height: 100px;
        line-height: 0.8rem;
        font-weight: 400;
        color: #D3D3D3;
    }

    @media only screen and (max-width: 1381px) {
        & h1 {
            font-size: 1.7em;
        }
    }
    @media only screen and (max-height: 700px) {
        overflow: hidden;
        & h6 {
            margin-top: 5px;
        }
        & h1 {
            margin-top: 25px;
        }
        & p {
            margin-top: 15px;
        }
    }
    @media only screen and (min-height: 815px) {
        justify-content: space-between;
    }
   
`

export const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    & img {
        filter: opacity(1) drop-shadow(-5px 9px 5px #D3D3D3) brightness(${(props) => props.dim ? 25 : 100}%) blur(${(props) => props.dim ? 6 : 0}px);
    }

    & img {
        width: 315px;
        height: 450px; 
    }

    @media only screen and (max-width: 965px) and (max-height: 700px) {
        & img {
            width: 100%;
            height: 70%;
        }
    } 
`