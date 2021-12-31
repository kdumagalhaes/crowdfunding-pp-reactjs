import styled from "styled-components";

export const Card = styled.label`
    display: block;
    width: 100%;
    padding: 30px;
    margin-bottom: 20px;
    border-radius: 7px;
    border: 1px solid #eee;
    cursor: pointer;
    color: var(--dark-gray);
    transition: border 0.3s;
    
    .title-and-pledge {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 0 30px 35px;
    }

    .paragraph-card {
        margin-bottom: 10px;
    }

    .title-card, 
    .radio-input {
        margin-right: 20px;
    }

    .pledge-card {
        color: var(--moderate-cyan);
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
        margin-left: 34px;
    }

    .checkmark {
        width: 25px;
        height: 25px;
        background: transparent;
        border: 1px solid #c5c5c5;
        cursor: pointer;
        border-radius: 50px;
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
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
`