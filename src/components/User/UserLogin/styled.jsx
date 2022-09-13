import styled from "styled-components";

export const LoginWrapper = styled.section`
  max-width: 550px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  a {
    margin: 100px auto 70px;
    > h2 {
      width: 100%;

      text-align: center;
      > img {
        width: 238px;
      }
    }
  }

  > .form-box {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  form {
    position: relative;
    width: 100%;
    background-color: #fff;
    border: 1px solid #c4c4c4;
    padding: 35px;
    z-index: 200;
    border-radius: 10px;
    input {
      width: 100%;
      border: none;
      border-bottom: 1px solid #c4c4c4;
      padding: 20px 0;
    }
    input#id {
      margin-bottom: 6px;
    }

    > button {
      margin-top: 36px;
    }
  }
`;

export const UserTypeTabWrapper = styled.div`
  width: 100%;
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
