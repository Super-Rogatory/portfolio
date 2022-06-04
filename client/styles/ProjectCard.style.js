import styled from 'styled-components';

export const ProjectSectionContainer = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: white;
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
export const Cards = styled.section`
    display: inline-flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-around;
    background-color: blanchedalmond;

`

export const ProjectCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    height: 100%;
    max-height: 500px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px black;

    &:hover {
        filter: opacity(1) drop-shadow(0px 0px 2px #99a8e8);
        transition: 0.5s;
    }
    & img {
        height: 75%;
        width: 100%;
        filter: opacity(1) brightness(75%); 
        transition: 0.5s ease-in-out;
    }
    & img:hover {
        filter: opacity(1) brightness(25%) blur(6px); 
        
    }
`

