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
    justify-content: center;

    & h6 {
        margin-top: 20px;
        margin-bottom: 0px;
        font-size: .8rem;
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
        max-width: 500px;
        height: 100px;
        line-height: 0.8rem;
        font-weight: 400;
        color: #D3D3D3;
    }

    @media only screen and (max-width: 1381px) {
        & h1 {
            font-size: 2rem;
        }
    }

    @media only screen and (max-width: 1176px) {
        & h6 {
            margin-top: 15px;
            margin-bottom: 0px;
            font-size: .7rem;
        }
        & h1 {
            margin-top: 35px;
            margin-bottom: 0px;
            font-size: 1.4rem;
        }
        & p {
            font-size: 0.6em;
            width: 100%;
            height: 95px;
        }      
    }
    @media only screen and (min-width: 1176px) and (max-height: 650px) {
        & h6 {
            margin-top: 15px;
            margin-bottom: 0px;
            font-size: .7rem;
            font-weight: 400;
            color: #99a8e8;
        }
        & h1 {
            margin-top: 35px;
            margin-bottom: 0px;
            font-size: 1.7rem;
            font-weight: 400;
        }
        & p {
            margin-top: 30px;
            font-size: 0.6em;
            width: 80%;
            height: 100px;
            line-height: 0.8rem;
            font-weight: 400;
            color: #D3D3D3;
        }        
    }
    @media only screen and (max-height: 550px) {
        overflow: hidden;
    }
   
`

export const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    & img {
        filter: opacity(1) drop-shadow(-5px 9px 5px #D3D3D3) brightness(${(props) => props.dim ? 25 : 100}%) blur(${(props) => props.dim ? 10 : 0}px);
    }

    & img {
        width: 315px;
        height: 450px; 
    }

    @media only screen and (max-width: 1020px) {
        & img {
            width: 100%;
            height: 75%;
        }
    } 

    @media only screen and (max-width: 850px) {
        & img {
            height: 60%;
        }
    }    

    @media only screen and (max-height: 570px) {
        & img {
            width: 100%;
            height: 75%;
        }
    }    
`