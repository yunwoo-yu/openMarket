import styled from "styled-components";
import plusImg from "../../../assets/icon-plus-line.svg";
import minusImg from "../../../assets/icon-minus-line.svg";

export const CartTotalPriceWrapper = styled.div`
  ul {
    width: 100%;
    height: 150px;
    background: #f2f2f2;
    display: flex;
    align-items: center;
    margin-top: 80px;

    li {
      width: 320px;
      position: relative;
      line-height: 20px;

      &:last-child {
        font-weight: 700;

        p {
          font-weight: 700;
          font-size: 36px;
          line-height: 45px;
          color: #eb5757;

          span {
            font-size: 18px;
            line-height: 23px;
          }
        }
      }

      &:first-child::after,
      &:nth-child(2)::after {
        content: "";
        display: block;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        right: calc(0px - (34px / 2));
        transform: translateY(-50%);
        background-image: url(${minusImg});
        background-color: #fff;
        background-repeat: no-repeat;
        background-position: center center;
      }
      &:nth-child(2)::after {
        background-image: url(${plusImg});
      }

      p {
        margin-top: 12px;
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;

        span {
          margin-left: 2px;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
        }
      }
    }
  }
  button {
    width: 220px;
    margin: 40px 0 160px;
  }
`;
