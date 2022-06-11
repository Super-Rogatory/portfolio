import styled from 'styled-components';

export const ContactSectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: ${(props) => props.type !== 'mobile' ? 65 : 100}%;
    height: 100%;
    justify-content: center;
    align-items: center;
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
        width: ${(props) => props.type !== 'mobile' ? 500 : 400}px;
        height: ${(props) => props.type !== 'mobile' ? 100 : 150}px;
        line-height: 0.8rem;
        font-weight: 400;
        color: #D3D3D3;
    }
    ${(props) => props.type === "mobile" && `
        flex-direction: column;
        margin-top: 150px;   
        @media only screen and (max-width: 433px) {
            & p {
                width: 100%;
                font-size: 12px;
            }
        }         
    `}

    ${(props) => props.type !== "mobile" && `
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
        `      
    }
   
`
