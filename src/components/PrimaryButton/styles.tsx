import styled from 'styled-components'

export const Button = styled.button `
    background: var(--moderate-cyan);
    border: none;
    border-radius: 50px;
    padding: 20px 40px;
    color: #fff;
    font-weight: 500;
    font-size: 1rem;
    transition: background 0.3s;

    &:hover {
        background: var(--dark-cyan);
    }

    @media screen and (max-width: 600px) {
        padding: 13px 33px;
    }
`