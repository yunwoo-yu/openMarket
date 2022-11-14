import styled from "styled-components";

export const OrderPaymentWrapper = styled.section`
  width: 1280px;
  display: flex;
  flex-wrap: wrap;
  margin: 70px 0 358px;

  > div {
    > p {
      font-weight: 500;
      font-size: 24px;
      line-height: 30px;
      margin-bottom: 18px;
    }
  }

  .payment-result-box {
    margin-left: auto;
  }
`;

export const FinalPaymentWrapper = styled.div`
  width: 480px;
  height: 400px;
  border: 2px solid #21bf48;
  border-radius: 10px;
  padding: 32px 0 0;
  overflow: hidden;
  p {
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    padding: 0px 30px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;

    &.total-price {
      padding-top: 24px;
      border-top: 1px solid #c4c4c4;
      margin-bottom: 20px;
      strong {
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;
        color: #eb5757;
      }
    }

    &:last-child {
      margin-bottom: 0;
    }
    strong {
      font-weight: 700;
      font-size: 18px;
      line-height: 23px;
      margin-left: auto;

      &.total-price {
      }
    }
    span {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      margin-left: 4px;
      color: #767676;
    }
  }

  .consent {
    width: 100%;
    height: 185px;
    background: #f2f2f2;
    padding: 30px;
    text-align: center;

    label {
      font-size: 16px;
      line-height: 20px;
    }
    > button {
      width: 220px;
      margin-top: 30px;
    }
  }
`;
