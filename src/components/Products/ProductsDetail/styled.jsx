import styled from "styled-components";

export const ProductDetail = styled.article`
  display: flex;
  margin-top: 80px;
  > img {
    width: 600px;
    height: 600px;
    margin-right: 50px;
  }
  .product-wrap {
    width: 50%;
    .product-text-box {
      .store-name {
        font-size: 18px;
        line-height: 23px;
        color: #767676;
      }
      .product-name {
        font-size: 36px;
        line-height: 45px;
        color: #000;
        margin-top: 16px;
      }
      .product-price {
        margin-top: 20px;
        font-size: 36px;
        font-weight: 700;
        line-height: 45px;
        color: #000;

        > span {
          font-size: 18px;
          font-weight: 400;
          line-height: 23px;
          margin-left: 2px;
        }
      }
    }

    .parcel {
      margin-top: 138px;
      padding-bottom: 20px;
      font-size: 16px;
      line-height: 20px;
      border-bottom: 2px solid #c4c4c4;
    }
    .product-amount-btn {
      width: 150px;
      display: flex;
      text-align: center;
      align-items: center;
      border: 1px solid #c4c4c4;
      margin: 30px 0;
      > button {
        width: 50px;
        height: 50px;
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        > img {
          width: 20px;
        }
      }
      > span {
        display: block;
        width: 50px;
        padding: 13.5px 0;
        font-size: 18px;
        line-height: 23px;
        border-right: 1px solid #c4c4c4;
        border-left: 1px solid #c4c4c4;
      }
    }
    .product-sum {
      display: flex;
      justify-content: right;
      align-items: baseline;
      padding-top: 32px;
      border-top: 2px solid #c4c4c4;

      > p {
        color: #000;
        font-size: 18px;
        font-weight: 500;
        line-height: 23px;
      }

      p:nth-child(2) {
        margin-left: auto;
      }

      .sum-amount {
        padding-right: 11px;
        font-size: 18px;
        line-height: 23px;
        color: #767676;
        position: relative;

        &::after {
          content: "";
          display: block;
          position: absolute;
          width: 1px;
          height: 18px;
          background-color: #c4c4c4;
          top: 3px;
          right: 0;
        }

        span {
          color: #21bf48;
        }
      }
      .sum-price {
        margin-left: 12px;
        font-size: 36px;
        font-weight: 700;
        line-height: 45px;
        color: #21bf48;

        span {
          font-size: 18px;
          font-weight: 400;
          line-height: 23px;
        }
      }
    }

    .buy-button-box {
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
    }
  }
`;
