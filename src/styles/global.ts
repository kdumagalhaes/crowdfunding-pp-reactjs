import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    // colors
    --moderate-cyan: hsl(176, 50%, 47%);
    --dark-cyan: hsl(176, 72%, 28%);
    --black: hsl(0, 0%, 0%);
    --dark-gray: hsl(0, 0%, 48%);

    // layout
    --mobile: 375px;
    --desktop: 1440px;
    --safe-area-padding: 0 40px 0 40px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {

    @media (max-width: var(---desktop)) {
        font-size: 93.75%;
    }

    @media (max-width: var(---mobile)) {
        font-size: 87.;
    }
}

body, input, textarea, button {
    font-family: 'Commissioner', sans-serif;
    font-weight: 400;
}

body {
    background: #fafafa;
}

button {
    cursor: pointer;
}

.react-modal-content {
    width: 100%;
    max-width: 85%;
    margin: 100px auto;
    background: #fff;
    position: relative;
    border-radius: 0.6rem;
    z-index: 2;

    .last-anchor {
        border: none;
    }

    ul {
        li {
            list-style: none;
            a {
                display: block;
                text-decoration: none;
                font-size: 1.2rem;
                color: var(--black);
                font-weight: 500;
                padding: 30px 0 30px 20px;
                border-bottom: 1px solid #eee;


            }
        }
    }
}

.react-modal-overlay {
    background-image: linear-gradient(to top, rgba(255,0,0,0), rgba(0,0,0,0.7));
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

`;
