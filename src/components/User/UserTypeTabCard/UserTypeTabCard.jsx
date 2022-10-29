import styled from "styled-components";

export const UserTypeTabCard = styled.div`
  width: 550px;
  margin: 0 auto;
  position: relative;
  top: 20px;

  &::after {
    content: "";
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 10px;
    height: 19px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    z-index: 400;
  }

  > button {
    width: 50%;
    position: relative;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    text-align: center;
    padding: 20px 0 40px;
    border: 1px solid #c4c4c4;
    border-bottom: none;
    border-radius: 10px 10px 0 0;
    background-color: #f2f2f2;
    cursor: pointer;
  }

  ${({ type }) =>
    type === "BUYER"
      ? `
  button:nth-child(1){
    background:#fff;
    z-index:300;
  }
  `
      : `
  button:nth-child(2){
    background:#fff;
    z-index:300;
  }
  `}
`;
