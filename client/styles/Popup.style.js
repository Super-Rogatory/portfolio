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
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 50%;
    border-radius: 5px;
    background-color: rgb(41,45,62);
    box-shadow: 0px 3px 15px black;
`;