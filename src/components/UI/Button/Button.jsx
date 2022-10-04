import styled, { css } from "styled-components";

const btnSizeStyles = css`
  ${({ btnSize }) =>
    btnSize === "sm" &&
    css`
      padding: 17px 0;
    `}
  ${({ btnSize }) =>
    btnSize === "medium" &&
    css`
      padding: 19px 0;
      font-size: 18px;
      line-height: 22px;
    `}
    ${({ btnSize }) =>
    btnSize === "large" &&
    css`
      padding: 19px 0;
      font-size: 24px;
      line-height: 30px;
    `}
`;

export const Button = styled.button`
  width: ${(props) => props.width || "80px"};
  padding: ${(props) => props.padding || "10px 0"};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  background: ${(props) => props.backColor || "#21BF48"};
  border: none;
  border-radius: 5px;
  color: ${(props) => props.color || "white"};
  cursor: pointer;
  ${btnSizeStyles}
`;
