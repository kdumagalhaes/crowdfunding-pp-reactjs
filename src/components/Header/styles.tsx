import styled from 'styled-components'

export const Container = styled.header `
    width: 100%;
    max-width: 1190px;
    padding: var(--safe-area-padding);
    margin: 50px auto;
    display: flex;
    justify-content: space-between;
`

export const Navigation = styled.nav `    
    ul {
        width: 100%;
        max-width: 500px;
        display: flex;

        li {
            margin-left: 50px;
        }
    }
`