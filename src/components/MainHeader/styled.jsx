import styled from "styled-components";
import { InnerWrapper } from "../common/Wrapper/InnerWrapper";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 90px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
`;

export const InnerHeader = styled(InnerWrapper)`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 auto;

  h1 {
    width: 124px;

    > img {
      width: 100%;
    }
  }

  > form {
    width: 400px;
    height: 46px;
    position: relative;

    margin-left: 30px;
    > input {
      width: 100%;
      padding: 13px 60px 13px 22px;
      border: 2px solid #21bf48;
      border-radius: 50px;
    }
    > .search_button {
      width: 28px;
      height: 28px;
      padding: 1% 1.5% 1.5% 1%;
      border: none;
      background: none;
      position: absolute;
      z-index: 100;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 50%;
      transform: translateY(-50%);
      right: 22px;
      cursor: pointer;
    }
  }
  .header_user_button {
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    > a {
      &.active {
        p {
          color: #21bf48;
        }
      }

      p {
        margin-top: 4px;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        color: #767676;
      }
    }
    > .cart-btn {
      width: 46px;
      img {
        display: block;
        margin-left: 5px;
      }
    }

    > .login-btn {
      width: 56px;
      margin-left: 26px;

      img {
        display: block;
        margin: 0 auto;
      }

      > p {
        margin-top: 4px;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        color: #767676;
      }
    }

    > .mypage-btn {
      width: 56px;
      padding: 0;
      margin-left: 26px;
      cursor: pointer;

      img {
        display: block;
        margin: 0 auto;
      }

      p {
        margin-top: 4px;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        color: #767676;

        &.active {
          color: #21bf48;
        }
      }
    }
    .user-menu {
      width: 130px;
      height: 108px;
      position: absolute;
      bottom: -124px;
      right: -28%;
      z-index: 100;
      text-align: center;
      padding: 10px;
      background-color: white;
      box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      > li {
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #767676;
        padding: 10px 0;
        border-radius: 5px;
        border: 1px solid transparent;

        &:first-child {
          margin-bottom: 8px;
        }

        &:hover {
          color: #000;
          border-color: #767676;
          cursor: pointer;
        }

        > a {
          color: inherit;
        }
      }
    }
  }
`;
