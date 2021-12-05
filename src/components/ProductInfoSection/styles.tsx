import styled from 'styled-components'

export const Container = styled.section`
    padding: var(--safe-area-padding);
`

export const Content = styled.section `
    width: 100%;
    max-width: 730px;
    height: 200px;
    background: #fff;
    border-radius: 9px;
    border: 1px solid #eee;
    margin: -93px auto;
    padding: 50px;
    position: relative;

    .product-logo {
        position: absolute;
        top: -30px;
        left: 0; 
        right: 0; 
        margin: 0 auto;
    }

    .product-name {
        font-size: 1.7rem;
    }

    .product-summary {
        color: var(--dark-gray);
        font-weight: 500;
        margin-top: 15px;
        font-size: 0.97rem;
    }

    .product-name,
    .product-summary {
        text-align: center;
    }
`