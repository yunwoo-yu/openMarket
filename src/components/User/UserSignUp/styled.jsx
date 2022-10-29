import styled from "styled-components";
import pwCheckOn from "../../../assets/icon-check-on.svg";
import pwCheckOff from "../../../assets/icon-check-off.svg";

export const SignUpWrapper = styled.section`
  max-width: 550px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  #regForm {
    .form-box {
      width: 100%;
      position: relative;
      z-index: 200;
      padding: 40px 35px 36px;
      background-color: #fff;
      border: 1px solid #c4c4c4;
      border-radius: 10px;

      .input-box {
        width: 100%;
        display: flex;
        flex-wrap: wrap;

        &.name-box {
          margin: 50px auto 4px;
        }

        &.company-box {
          margin-top: 50px;
        }

        > label {
          width: 100%;
          margin-bottom: 10px;
          font-size: 16px;
          line-height: 20px;
          color: #767676;
        }
        > input {
          width: 100%;
          padding: 17px 16px;
          font-size: 16px;
          line-height: 20px;
          border-radius: 5px;
          border: 1px solid #c4c4c4;
          margin-bottom: 12px;

          &:focus {
            outline: 1px solid #21bf48;
          }

          &#regUserId {
            width: 346px;
          }

          &#companyRegistrationNumber {
            width: 346px;
          }

          &.error-active {
            border-color: #eb5757;
          }

          &.active {
            border-color: #21bf48;
          }
        }

        #regPassword,
        #regPasswordConfirm {
          background-repeat: no-repeat;
          background-position: center right 16px;
          background-image: url(${pwCheckOff});

          &.check {
            background-image: url(${pwCheckOn});
          }
        }

        button {
          margin-left: auto;
          height: 56px;
        }
      }
      .errors-message {
        font-size: 16px;
        line-height: 20px;
        color: #eb5757;
        margin-bottom: 12px;
      }
      .success {
        font-size: 16px;
        line-height: 20px;
        color: #21bf48;
        margin-bottom: 12px;
      }
    }
    .check-box {
      width: 480px;
      display: flex;
      margin: 34px auto;
      > input {
        width: 16px;
        height: 16px;
        margin: 3px 10px 0 0;
      }
      > label {
        width: 454px;
        font-size: 16px;
        line-height: 20px;
        color: #767676;

        strong {
          font-weight: 700;
          text-decoration: underline;
        }
      }
    }
    > button {
      margin-bottom: 110px;
    }
  }
`;
