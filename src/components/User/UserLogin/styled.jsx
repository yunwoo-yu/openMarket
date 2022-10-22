import styled from "styled-components";

export const LoginWrapper = styled.section`
  max-width: 550px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

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
    #username {
      margin-bottom: 6px;
    }

    #password {
      margin-bottom: 10px;
    }

    > button {
      margin-top: 26px;
    }

    p {
      margin-top: 16px;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: #eb5757;
    }
  }
`;

export const SignUpWrapper = styled.div`
  margin-top: 30px;

  > a {
    font-size: 16px;
    line-height: 20px;
    position: relative;
    color: #333;
  }

  > a:nth-child(1) {
    margin-right: 14px;

    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 1px;
      height: 16px;
      background-color: #333;
      top: 5px;
      right: -15px;
    }
  }
  > a:nth-child(2) {
    margin-left: 14px;
  }
`;
