import styled from 'styled-components';

export const Container = styled.div`
    font-weight: 900;
    width: 100vw;
    height: 100vh;
    background-color: rgba(41,45,62,255);
`;

export const BodyContainer = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 450px;

    & img {
        width: 315px;
        height: 450px;
    }
    
`
export const BodySectionContainer = styled.section`
    background-color: blanchedalmond;
    display: flex;
    flex-direction: column;
    width: 65%;
    
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
        color: ${(props) => props.color};
    }
    & p {
        font-size: 14px;
        width: 500px;
        height: 100px;
        line-height: 16px;
        font-weight: 400;
        margin-top: 30px;
        color: #404040;
    }
`