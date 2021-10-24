import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --darkBlue: #141c2f;
        --lightBlue: #1d2c4c;
        --blue: #1b79e4;
        --lightGray: #cdd4de;
        --maxWidth: 1280px;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
        --lightGrey: #eee;
        --medGrey: #353535;
    }

    *{
        box-sizing: border-box;
        font-family: 'Noto Sans Mono', monospace;
    }

    body{
        background-color: var(--darkBlue);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 0;
    }
    

`