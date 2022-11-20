import styled from "styled-components";

export const PostTextWrapper = styled.div`
  padding: 8px 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 1px solid #c4c4c4;
  input {
    width: 800px;
    margin-bottom: 8px;
    margin-left: 170px;
    &:nth-child(2) {
      width: 170px;
      margin-left: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  button {
    width: 154px;
    margin: 0 0 8px 10px;
  }
`;
