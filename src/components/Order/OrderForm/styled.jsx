import styled from "styled-components";

export const OrderFormWrapper = styled.section`
  width: 1280px;
  margin: 0 auto;
  h3 {
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    margin-top: 98px;
    padding-bottom: 18px;
    border-bottom: 2px solid #c4c4c4;
  }

  form {
    > p {
      font-weight: 500;
      font-size: 18px;
      line-height: 23px;
      margin-top: 40px;
      padding-bottom: 8px;
      border-bottom: 2px solid #c4c4c4;
    }

    > div {
      padding: 8px 0;
      display: flex;
      border-bottom: 1px solid #c4c4c4;
      align-items: center;
      > label {
        width: 170px;
        line-height: 20px;
      }
      > input {
        width: 334px;
        line-height: 20px;
        padding: 9px 5px;
        border: 1px solid #c4c4c4;

        &:focus {
          outline: 1px solid #21bf48;
        }
      }
    }
  }
`;
