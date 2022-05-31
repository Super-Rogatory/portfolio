// create global styles here
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'consolas';
        src: url('./CONSOLA.ttf'), url('./CONSOLAB.ttf'), 
            url('./consolai.ttf'), url('./Consolas.ttf'), url('consolaz.tff') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    html {
        font-size: 24px;
    }

    body {
        margin: 0px;
        padding: 0px;
        font-family: 'consolas', sans-serif;
    }
`;
