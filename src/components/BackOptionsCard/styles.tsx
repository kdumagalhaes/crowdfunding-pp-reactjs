import styled from "styled-components";


export const Card = styled.label`
    display: block;
    width: 100%;
    padding: 30px;
    margin-bottom: 20px;
    border-radius: 7px;
    cursor: pointer;
    color: var(--dark-gray);
    transition: border 0.3s;

    .content {
        display: flex;
    }
    
    .title-and-pledge {
        display: flex;
        align-items: center;
        margin-bottom: 25px;
        width: 100%;
        max-width: 475px;
    }

    .title-card {
        margin-left: 25px;
    }

    .title-card {
        margin-right: 20px;
    }

    .pledge-card {
        color: var(--moderate-cyan);
    }

    .quantity {
        justify-self: end;
    }

    .quantity-card {
        font-size: 1.3rem;
        font-weight: 700;
        margin-right: 8px;
    }

    .title-card,
    .quantity-card {
        color: #000;
    }

    .paragraph-card {
        font-size: 0.95rem;
        margin-left: 50px;
    }

    .checkmark {
        width: 25px;
        height: 25px;
        background: transparent;
        border: 1px solid #c5c5c5;
        border-radius: 100px;
    }

    .radio-input[type="radio"] {
        -webkit-appearance: none;
    }

    .radio-input[type="radio"]:checked {
        width: 13px;
        height: 13px;
        background: var(--moderate-cyan);
        cursor: pointer;
        border-radius: 50px;
        margin: 5px;
    }

`

export const HorizontalFlex = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-content: center;
`