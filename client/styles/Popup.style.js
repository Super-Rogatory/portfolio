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
    height: 10%;
    border-radius: 5px 5px 0 0;
    background-color: aliceblue;

    & img {
        width: 32px;
        height: 32px;
        padding: 0 5px 0 5px;
    }
`;

export const PopupLeftSide = styled.div`
    display: inline-flex;
    width: 65%;
`;

export const PopupRightSide = styled.div`
    cursor: pointer;
    & img:hover {
        filter: invert(86%) sepia(31%) saturate(6106%) hue-rotate(193deg) brightness(101%) contrast(82%);

    }
`;