import styled from "styled-components";

export const CartHeaderWrapper = styled.thead`
  width: 100%;
  height: 60px;
  background: #f2f2f2;
  display: flex;
  align-items: center;
  margin-bottom: 35px;
  box-sizing: border-box;
  padding: 19px 131px 19px 30px;
  tr {
    box-sizing: border-box;
    display: block;
    width: 100%;

    td {
      box-sizing: border-box;
      display: inline-block;
      font-size: 18px;
      line-height: 23px;
      vertical-align: middle;

      &:first-child {
        margin-right: 314px;
      }
      &:nth-child(2) {
        margin-right: 375px;
      }
      &:nth-child(3) {
        margin-right: 237px;
      }
    }
  }
`;
