import styled from "styled-components";

export const OrderHeaderWrapper = styled.nav`
  width: 100%;
  height: 60px;
  background: #f2f2f2;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  box-sizing: border-box;
  padding: 10px 8px;
  border-radius: 10px;
  ul {
    display: flex;
    width: 100%;
    text-align: center;
    li {
      width: 200px;
      display: inline-block;
      font-size: 18px;
      line-height: 23px;

      &:first-child {
        width: 664px;
      }
    }
  }
`;
