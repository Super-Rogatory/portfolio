import styled from 'styled-components';

export const ProjectSectionContainer = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
`
export const Cards = styled.section`
    display: inline-flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-evenly;
`

export const ProjectCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    height: 100%;
    max-height: 500px;
    border-radius: 5px;
    box-shadow: 0px 0px 15px black;
    color: aliceblue;
    font-weight: 400;
`

export const ProjectCardImgSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75%;
    & img {
        object-fit: cover;
        height: 100%;
        width: 100%;
        border-radius: 5px 5px 0px 0px;
        filter: opacity(1) brightness(75%); 
        transition: 0.3s ease-in-out;
    }

   ${props => props.dim ? 
        `
        & img {
            filter: opacity(1) brightness(15%) blur(10px);
        }
        `
        : 
        `
        & img {
            opacity(1) brightness(75%);
        }
        `
    }
    & label:hover {
        background-color: rgba(153,168,232,0.5);
        color: rgba(41,45,62,255); 
    }
`

export const ProjectCardDescription = styled.div`
    display: inline-flex;
    justify-content: space-evenly;
    flex-direction: column;
    width: 100%;
    height: 17%; 
    border-bottom: 1px solid black;
    background-color: rgba(153,168,232,0.1);
    color: aliceblue;
    & h1 {
        margin: 5px 0px 0px 15px;
        padding: 0px;
        font-size: 22px;
        font-weight: 800;
        width: calc(100% - 15px);   
    }
    & span {   
        width: 100%;
        margin: 0px 0px 0px 15px; 
        padding: 0px 5px 0px 0px;
        font-size: 0.55rem;
        width: calc(100% - 20px);   
    }

`

export const ProjectCardTechnologiesList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8%; 
    font-size: 0.8rem;
    border-radius: 0px 0px 5px 5px;
    font-weight: 600;

    background-color: rgba(153,168,232,0.1);
    color: aliceblue;
`

export const SpecialButton = styled.label`
    position: absolute;
    border: 2px solid rgba(153,168,232,0.1);
    border-radius: 8px;
    background-color: rgba(41,45,62,255);
    font-weight: 800;
    width: 200px;
    height: 50px;
`