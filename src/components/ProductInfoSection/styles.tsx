import styled from "styled-components";

export const Container = styled.div`
  padding: var(--safe-area-padding);
`;

export const Content = styled.section`
  width: 100%;
  max-width: 730px;
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

  .flex-container {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
  }

  .btn-bookmark {
    border-radius: 50px;
    border: none;
    display: flex;
    align-items: center;

    p {
      font-weight: 700;
      color: var(--dark-gray);
      font-size: 1rem;
      padding: 0 30px 0 20px;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 20px;

    .product-name {
      font-size: 1.2rem;
      margin-top: 25px;
    }

    .product-summary {
      font-size: 0.75rem;
      line-height: 21px;
    }

    .btn-bookmark {
      background: transparent;

      p {
        display: none;
      }
    }
  }
`;
