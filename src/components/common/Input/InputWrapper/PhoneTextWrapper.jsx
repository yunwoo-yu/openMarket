import styled from "styled-components";

export const PhoneTextWrapper = styled.div`
  padding: 8px 0;
  display: flex;
  border-bottom: 1px solid #c4c4c4;
  align-items: center;

  span {
    margin: 0 10px;
    line-height: 20px;
  }

  input {
    width: 100px;

    &:nth-child(2) {
      width: 80px;
    }
  }
`;
