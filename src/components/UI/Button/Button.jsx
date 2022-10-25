import styled, { css } from "styled-components";

const setSize = (size) => {
  switch (size) {
    case "large":
      return css`
        padding: 19px 0;
        font-size: 24px;
        line-height: 30px;
      `;
    case "medium":
      return css`
        padding: 19px 0;
        font-size: 18px;
        line-height: 22px;
      `;
    case "sm":
      return css`
        padding: 17px 0;
        line-height: 20px;
      `;
    default:
      return css`
        padding: 10px 0;
      `;
  }
};

export const Button = styled.button`
  width: ${(props) => props.width || "80px"};
  padding: ${(props) => props.padding};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  background: ${(props) => props.backColor || "#21BF48"};
  border: none;
  border-radius: 5px;
  color: ${(props) => props.color || "white"};
  cursor: pointer;

  &:disabled {
    background-color: #c4c4c4;
    cursor: not-allowed;
  }
  ${({ size }) => setSize(size)}
`;
