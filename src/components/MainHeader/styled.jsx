import styled from "styled-components";
import { InnerContainer } from "../UI/Layout/InnerContainer";

export const InnerHeader = styled(InnerContainer)`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 auto;

  h1 {
    max-width: 124px;
    height: 38px;
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

    > a {
      width: 46px;
      img {
        display: block;
        margin-left: 5px;
      }

      &:last-child img {
        margin: 0 auto;
      }
      p {
        margin-top: 4px;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
      }
    }

    > a:last-child {
      width: 56px;
      margin-left: 26px;
    }
  }
`;
