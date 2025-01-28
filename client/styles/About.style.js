import styled from 'styled-components';

export const AboutContainer = styled.div`
    display: inline-flex;
    ${(props) => props.type === "mobile" && `
        flex-direction: column;
    `}
    justify-content: center;
    align-items: center;
    width: ${(props) => props.type !== "mobile" ? 70: 100}%;
    height: 100%;
    ${(props) => props.type !== 'mobile' && `
        @media only screen and (max-width: 1725px) {
           width: 80%;
        }
        @media only screen and (max-width: 950px) {
            width: 90%;     
        }
    `}
`

export const AboutTextContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: ${(props) => props.type !== "mobile" ? 60: 100}%;
    height: 100%;
    padding: 0px ${(props) => props.type !== "mobile" ? 20 : 0}px 0px 0px;
    margin: ${(props) => props.type !== "mobile" ? 0 : 15}px 0px;
    max-height: ${(props) => props.type !== "mobile" && '600px'};
    & p {
        color: ${(props) => props.type !== "mobile" ? "aliceblue" : "#D3D3D3"};
        font-size: 18px;
        font-weight: 300;
        overflow: hidden;
        margin: 0px 0px ${(props) => props.type !== "mobile" ? 0 : 15}px 0px;
        padding: 0;    
        text-overflow: ellipsis;
        word-wrap: break-word;
    }
    
    & p span {
        color: #99a8e8;       
    }  

    ${(props) => props.type !== 'mobile' ? 
`        @media only screen and (max-width: 1325px) and (max-height: 600px) {
            width: 80%;
            & p {
                font-size: 12px;
            }
        }
        @media only screen and (max-width: 1325px) and (min-height: 600px) {
            width: 80%;
            & p {
                font-size: 14px;
            }
        }
        @media only screen and (min-width: 1325px) and (min-height: 700px) {
            width: 80%;
            & p {
                font-size: 18px;
            }
        }
        @media only screen and (min-width: 1325px) and (max-height: 700px) {
            width: 80%;
            & p {
                font-size: 14px;
            }
        }            
        @media only screen and (min-width: 1325px) and (min-height: 1000px) {
            width: 85%;
            & p {
                font-size: 24px;
            }
        }
    `
        :
    ` 
        @media only screen and (max-width: 665px)  {
            & p {
                font-size: 15px;
                margin: 0px 0px 30px 0px;
            }
        }             
    `
    }
`

export const AboutImageContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${(props) => props.type !== "mobile" ? 40: 80}%;
    height: 100%;

    & img {
            width: 380px;
            height: 500px; 
            object-fit: cover;
            border-radius: 5px;
            border: 2px solid aliceblue;
            box-shadow: 0px 0px 10px aliceblue;
    }
    @media only screen and (max-height: 999px) {
        & img {
            width: 280px;
            height: 400px;
        }   
    }   
    @media only screen and (max-height: 700px) {
        & img {
            width: 240px;
            height: 360px;
        }   
    }
    @media only screen and (max-height: 500px) {
        & img {
            width: 200px;
            height: 200px;
        }   
    } 
    @media only screen and (max-width: 2300px) {
        & img {
            width: 340px;
            height: 460px;
        }   
    }
        
    ${(props) => props.type !== 'mobile' && `
        @media only screen and (max-width: 2000px) {
            justify-content: flex-end;
        } 
    `}

    @media only screen and (max-width: 1350px) {
        & img {
            width: 280px;
            height: 400px;
        }    
    }
    @media only screen and (max-width: 950px) {
        & img {
            width: 230px;
            height: 400px;
        }       
    }
       
`