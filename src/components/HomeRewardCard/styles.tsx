import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-radius: 7px;
  border: 1px solid #cfcfcfeb;
  padding: 30px;
  margin-bottom: 25px;

  &:last-child {
    margin-bottom: 0;
  }

  .title {
    font-size: 1.1rem;
  }

  .pledge {
    color: var(--moderate-cyan);
    font-weight: 500;
  }

  .flex {
    display: flex;
  }

  .space-between {
    justify-content: space-between;
  }

  .align-bottom {
    align-items: baseline;
  }

  .align-hor {
    align-items: center;
  }

  .quantity-number {
    font-weight: 700;
    font-size: 2rem;
    margin-right: 10px;
  }

  .quantity-left {
    font-weight: 500;
    color: var(--dark-gray);
  }

  .paragraph {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 600px) {
    padding: 20px;

    .flex {
      flex-direction: column;
    }

    .title {
      margin-bottom: 10px;
    }

    .title,
    .pledge {
      font-size: 0.9rem;
    }

    .pledge {
      margin-bottom: 20px;
    }

    .align-hor {
      align-items: flex-start;
    }

    .quantity {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 20px;
    }
  }
`;
