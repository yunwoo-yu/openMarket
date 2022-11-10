import styled from "styled-components";

export const PaymentTextWrapper = styled.div`
  width: 760px;
  padding: 18px 12px;
  display: flex;
  border-bottom: 2px solid #c4c4c4;
  align-items: center;

  label {
    width: auto;
    font-size: 16px;
    line-height: 20px;
    margin-left: 10px;
    margin-right: 20px;
    vertical-align: middle;
  }
  input[type="radio"] {
    width: 16px;
    height: 16px;
    line-height: 20px;
    margin: 0;
    margin-top: 2px;
    box-sizing: border-box;
    &:focus {
      outline: none;
    }
  }
`;
