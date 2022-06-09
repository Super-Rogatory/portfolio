import styled from 'styled-components';

export const AboutContainer = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 100%;
`

export const AboutTextContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 60%;
    height: 100%;
    padding: 0px 20px 0px 0px;
  
    & p {
        color: aliceblue;
        font-size: 18px;
        font-weight: 300;
        overflow: hidden;
        margin: 5px 0px;
        padding: 0;    
        text-overflow: ellipsis;
        word-wrap: break-word;
    }

    @media only screen and (max-width: 1325px) and (max-height: 600px) {
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
    @media only screen and (max-height: 700px) {
        width: 80%;
        & p {
            font-size: 14px;
        }
    }        
    @media only screen and (max-width: 1200px) and (min-height: 700px) {
        width: 80%;
        & p {
            font-size: 14px;
        }
    }   

`

export const AboutImageContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 100%;

    & img {
            width: 280px;
            height: 400px; 
            object-fit: cover;
            border-radius: 5px;
            border: 2px solid aliceblue;
            box-shadow: 0px 0px 10px aliceblue;
    }
    @media only screen and (max-height: 400px) {
        & img {
            width: 200px;
            height: 200px;
        }   
    } 

    @media only screen and (max-height: 630px) {
        & img {
            width: 80%;
            height: 80%;
        }   
    }  
    @media only screen and (max-width: 1100px) {
        & img {
            width: 80%;
            height: 80%;
        }   
    }        
`