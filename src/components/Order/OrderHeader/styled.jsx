import styled from "styled-components";

export const OrderHeaderWrapper = styled.nav`
  width: 100%;
  height: 60px;
  background: #f2f2f2;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  box-sizing: border-box;
  padding: 10px 0;
  border-radius: 10px;
  ul {
    display: block;
    width: 100%;

    li {
      display: inline-block;
      font-size: 18px;
      line-height: 23px;

      &:first-child {
        margin-left: 261px;
      }
      &:nth-child(2) {
        margin-left: 360px;
      }
      &:nth-child(3) {
        margin-left: 188px;
      }
      &:nth-child(4) {
        margin-left: 171px;
      }
    }
  }
`;
