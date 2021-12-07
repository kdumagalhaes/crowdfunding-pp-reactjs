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
    margin: 115px auto 0 auto;
    padding: 50px;

    .flex-container {
        display: flex;
    }

    .number {
        display: flex;
        flex-direction: column;
        border-right: 1px solid #eee;
        padding: 0 50px;

        &:last-child {
            border: none;
        }

        &:first-child {
            padding-left: 0;
        }
    }

    .number-value {
        font-size: 2rem;
        font-weight: 700;
    }

    .number-backed {
        font-size: 0.93rem;
        color: var(--dark-gray);
        font-weight: 500;
        margin-top: 7px;
    }

    .value-range {
        -webkit-appearance: none;
        width: 100%;
        margin-top: 40px;
        height: 15px;
        border-radius: 50px;
        background: var(--moderate-cyan);

        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
        }
    }

    @media screen and (max-width: 600px) {
        padding: 25px;

        .flex-container {
            flex-direction: column;
            align-items: center;
        }

        .number {
            padding: 25px 0;
            border-right: 0;
            border-bottom: 1px solid #eee;
            align-items: center;

            &:first-child{
                padding-top: 0;
            }

            &:last-child {
                padding-bottom: 0;
            }
        }
    }

`