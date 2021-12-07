import styled from 'styled-components'

export const Container = styled.div`
    padding: var(--safe-area-padding);
`

export const Content = styled.section`
    width: 100%;
    max-width: 730px;
    background: #fff;
    border-radius: 9px;
    border: 1px solid #eee;
    margin: 23px auto;
    padding: 50px;

    .title, 
    .paragraph {
        margin-bottom: 30px;
    }

    .title {
        font-size: 1.3rem;
    }

    .paragraph {
        color: var(--dark-gray);
        line-height: 1.9rem;
    }

    @media screen and (max-width: 600px) {
        padding: 25px;

        .title {
            font-size: 1.06rem;
        }

        .paragraph {
            font-size: 0.77rem;
            line-height: 1.5rem;
        }
    }
`