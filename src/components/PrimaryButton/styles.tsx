import styled from 'styled-components'

interface Props {
    height: string
    maxWidth: string
    padding: string
}

export const Button = styled.button<Props> `
    background: var(--moderate-cyan);
    width: 100%;
    max-width: ${({maxWidth}) => maxWidth};
    height: ${({height}) => height};
    border: none;
    border-radius: 50px;
    padding: ${({padding}) => padding};
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