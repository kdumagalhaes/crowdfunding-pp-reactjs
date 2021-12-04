import { createGlobalStyle } from 'styled-components'

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
`