import styled from "styled-components";

export const QuantityButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  margin: 30px 0;

  > button {
    width: 50px;
    height: 100%;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;

    &:disabled {
      background-color: #e0e0e0;
      cursor: not-allowed;
    }

    > img {
      width: 20px;
    }
  }
  > span {
    width: 50px;
    font-size: 18px;
    line-height: 23px;
    padding: 13.5px 0;
    text-align: center;
    border-left: 1px solid #c4c4c4;
    border-right: 1px solid #c4c4c4;
  }
`;
