import styled from "styled-components";

export const PaymentTextWrapper = styled.div`
  width: 760px;
  height: auto;
  padding: 18px 12px;
  display: flex;
  border: 2px solid #c4c4c4;
  border-right: none;
  border-left: none;
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
