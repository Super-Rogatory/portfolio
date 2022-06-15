import styled from 'styled-components';

export const ProjectSectionContainer = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    height: ${(props) => props.type !== 'mobile' ? '100%' : '525px'};
    ${(props) => props.type === "mobile" && `
        flex-direction: column;
    `}    
`
export const Cards = styled.section`
    display: ${(props) => props.type !== 'mobile' ? 'inline-flex' : 'flex'};
    flex-direction: ${(props) => props.type !== 'mobile' ? 'row' : 'column'};
    width: 100%;
    height: 100%;
    align-items: ${(props) => props.type !== 'mobile' ? 'center' : 'center'};
    justify-content: ${(props) => props.type !== 'mobile' ? 'space-evenly' : 'flex-start'};
    & > img.direction-arrow-left {
        position: absolute;
        width: 32px;
        height: 32px;
        top: ${(props) => props.type !== 'mobile' ? '50' : '390'}%;  
        left: ${(props) => props.type !== 'mobile' ? '5' : '30'}%;  
        transform: translate(-50%, -50%);
        transition: 1s ease-in-out;
        filter: opacity(1) drop-shadow(0px 0px 1px #99a8e8); 
        cursor: pointer;
    }
    & > img.direction-arrow-right  {
        position: absolute;
        width: 32px;
        height: 32px;
        top: ${(props) => props.type !== 'mobile' ? '50' : '390'}%;  
        left: ${(props) => props.type !== 'mobile' ? '95' : '70'}%;  
        transform: translate(-50%, -50%);
        transition: 1s ease-in-out;
        filter: opacity(1) drop-shadow(0px 0px 1px #99a8e8); 
        cursor: pointer;       
    }

    & > img:hover {
        filter: opacity(1) drop-shadow(0px 0px 2px #99a8e8);
        transition: 0.3s;
    }     
`

export const ProjectCard = styled.div`
    display: flex;
    flex-direction: column;
    width: ${(props) => props.type !== 'mobile' ? '600px' : '88%'};
    height: 100%;
    max-height: 470px;
    border-radius: 5px;
    box-shadow: 0px 0px 15px black;
    color: aliceblue;
    font-weight: 400;
    ${(props) => props.type === "standard_view" && `
        @media only screen and (max-width: 1500px) {
            width: 505px;
        }
        `
    }
    height: ${(props) => props.type !== 'mobile' && `
        @media only screen and (max-height: 530px) {
            height: 50%;
        }     
    `};


`

export const ProjectCardImgSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${(props) => props.type !== 'mobile' ? '75%' : '65%'};
    & img {
        object-fit: cover;
        height: 100%;
        width: 100%;
        border-radius: 5px 5px 0px 0px;
        filter: opacity(1) brightness(75%); 
        transition: 0.5s ease-in-out;
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

    ${props => props.type !== 'mobile' && 
        `@media only screen and (max-height: 750px) and (min-height: 530px) {
            height: 72%;
        }`
    }

`

export const ProjectCardDescription = styled.div`
    display: inline-flex;
    justify-content: space-evenly;
    flex-direction: column;
    width: 100%;
    height: ${(props) => props.type !== 'mobile' ? '17%' : '22%'};
    border-bottom: 1px solid black;
    background-color: rgba(153,168,232,0.1);
    color: #D3D3D3;  
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

    ${props => props.type !== 'mobile' ? 
        `    
            @media only screen and (max-height: 530px) {
                overflow: hidden;
                height: 50%;      
            }

            @media only screen and (max-height: 750px) and (min-height: 530px) {
                height: 20%;
            }
        `
        : 
        `
            @media only screen and (max-width: 388px) {
                & span {   
                    font-size: 0.5rem;
                    overflow: hidden;
                }                
            }                
        `
    }
`

export const ProjectCardTechnologiesList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: ${(props) => props.type !== 'mobile' ? '8%' : '13%'};
    font-size: 0.75rem;
    border-radius: 0px 0px 5px 5px;
    font-weight: 600;
    background-color: rgba(153,168,232,0.1);
    color: #D3D3D3;
    text-align: center;

    ${props => props.type !== 'mobile' ? 
        `    
        @media only screen and (max-width: 1500px) {
            font-size: 0.6rem;
        }
        @media only screen and (max-height: 530px) {
            overflow: hidden;
            height: 50%; 
            font-size: 0.8rem;
        }
        `
        :
        `
        @media only screen and (max-width: 479px) and (min-width: 388px) {  
            & span {
                padding: 0px 10px;
                font-size: 0.65rem;                   
            }
        }          
        
        @media only screen and (max-width: 388px) {  
            & span {
                padding: 0px 10px;
                font-size: 0.5rem; 
                overflow: hidden;                  
            }
        }
        `
    }    

`

export const SpecialButton = styled.label`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    border: 2px solid rgba(153,168,232,0.1);
    border-radius: 8px;
    width: 225px;
    height: 50px;
    transition: 0.5 ease-in;
    & a {
        margin: 0px;
        padding: 0px;
        width: 35px;
        height: 35px;
    }
    & img {
        width: 35px;
        height: 35px;
        filter: opacity(1) drop-shadow(0px 0px 1px #99a8e8);
        cursor: pointer;
    }

    & img:hover {
        filter: opacity(1) drop-shadow(0px 0px 2px #99a8e8);
        transition: 0.3s;
    }    
`

export const ProjectMobileArrows = styled.div`
    display: flex;
    justify-content: space-evenly;    
    max-height: 50px;   
    width: 100%;
    margin: 20px 0;
    & > img.direction-arrow-left {
        width: 40px;
        height: 40px;  
        filter: opacity(1) drop-shadow(0px 0px 2px #99a8e8); 
        cursor: pointer;
    }
    & > img.direction-arrow-right  {
        width: 40px;
        height: 40px;  
        filter: opacity(1) drop-shadow(0px 0px 2px #99a8e8); 
        cursor: pointer;      
    }    
`