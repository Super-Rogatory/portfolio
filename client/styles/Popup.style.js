import styled from 'styled-components';

export const PopupContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(41,45,62,0.9);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
`;

export const PopupSectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    height: 50%;
    border-radius: 5px;
    background-color: rgb(41,45,62);
    box-shadow: 0px 3px 20px black;
    z-index: 1;
`;

export const PopupSectionNavBar = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 12%;
    border-radius: 5px 5px 0 0;
    background-color: rgba(240, 248, 255, 0.8);
    overflow: hidden;

    & img {
        width: 32px;
        height: 32px;
        padding: 0 5px 0 5px;
    }

    @media only screen and (max-width: 1510px) {
        font-size: 0.8rem;
        & img {
            width: 24px;
            height: 24px;
            padding: 0 5px 0 5px;
        }
    }

    @media only screen and (max-width: 1213px) {
        font-size: 0.6rem;
    }
`;

export const PopupLeftSide = styled.div`
    display: inline-flex;
    align-items: center;
    width: auto;
    height: 100%;
`;

export const PopupRightSide = styled.div`
    display: flex;
    align-items: center;
    width: auto;
    & img {
        cursor: pointer; 
    }
    & img:hover {
        filter: invert(86%) sepia(31%) saturate(6106%) hue-rotate(193deg) brightness(101%) contrast(82%);
    }
`;

export const PopupSectionPrompt = styled.section`
    width: 100%;
    height: 10%;
    color: rgba(240, 248, 255, 0.8);
    font-weight: 400;
    font-size: 18px;
    margin-left: 3px;
    overflow: hidden;
    & .Typewriter {
        display: inline;
        margin: 0px;
        padding: 0px;
    }

    @media only screen and (max-width: 1013px) {
        font-size: .6rem;
    }
`

export const PopupSectionBody = styled.section`
    width: 100%;
    height: 78%;
    color: rgba(240, 248, 255, 0.8);
    font-weight: 400;
    font-size: 18px;
    margin-left: 3px;

    & span {
        display: block;
    }
`

export const PopupSectionGrid = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

export const PopupSectionRow = styled.section`
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
    height: 19%;
    margin-top: 10px;
    & span {
        width: 150px;
        text-align: center;
    }
`