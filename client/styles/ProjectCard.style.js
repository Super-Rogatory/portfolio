import styled from 'styled-components';

export const ProjectSectionContainer = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
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
export const Cards = styled.section`
    display: inline-flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-around;

`

export const ProjectCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    height: 100%;
    max-height: 500px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px black;
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
            filter: opacity(1) brightness(25%) blur(6px);
        }
        `
        : 
        `
        & img {
            opacity(1) brightness(75%);
        }
        `
    }
    & button:hover {
        background-color: rgba(153,168,232,0.5);
        color: rgba(41,45,62,255); 
    }
`

export const ProjectCardDescription = styled.div`
    display: inline-flex;
    flex-direction: column;
    width: 100%;
    height: 15%; 
    border-bottom: 1px solid black;
    & h1 {
        margin: 5px 0px 0px 15px;
        padding: 0px;
        font-size: 22px;
        font-weight: 800;
    }
    & span {   
        width: 100%;
        margin: 0px 0px 0px 15px; 
        font-size: 0.6rem;
    }

`

export const ProjectCardTechnologiesList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10%; 
`

export const SpecialButton = styled.button`
    position: absolute;
    border: 2px solid #99a8e8;
    border-radius: 8px;
    text-align: center;
    color: #99a8e8;
    background-color: rgba(41,45,62,255);
    font-weight: 800;
    width: 200px;
    height: 50px;
    cursor: pointer;
    
`