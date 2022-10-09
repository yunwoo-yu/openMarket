import styled from "styled-components";

export const DetailWrapper = styled.section`
  margin-top: 80px;
  display: flex;

  .product-data {
    display: flex;
    gap: 50px;
    > img {
      width: 600px;
      height: 600px;
      object-fit: cover;
    }
    .detail-text-box {
      width: 100%;

      .store-name {
        font-size: 18px;
        line-height: 23px;
        color: #767676;
        margin-bottom: 16px;
      }
      .product-name {
        font-size: 36px;
        line-height: 45px;
        margin-bottom: 20px;
      }
      .product-price {
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        margin-bottom: 138px;
        strong {
          font-size: 36px;
          line-height: 45px;
          font-weight: 700;
          margin-right: 2px;
        }
      }
      .delivery {
        font-size: 16px;
        line-height: 20px;
        padding-bottom: 20px;
        color: #767676;
        border-bottom: 2px solid #c4c4c4;
      }

      .quantity-box {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 50px;
        border: 1px solid #c4c4c4;
        border-radius: 5px;
        margin: 30px 0;

        > button {
          width: 50px;
          height: 100%;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          > img {
            width: 20px;
          }
        }
        > span {
          width: 50px;
          font-size: 18px;
          line-height: 23px;
          padding: 13.5px 0;
          text-align: center;
          border-left: 1px solid #c4c4c4;
          border-right: 1px solid #c4c4c4;
        }
      }
      .sum-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 32px;
        border-top: 2px solid #c4c4c4;

        .sum-price-text {
          font-weight: 500;
          font-size: 18px;
          line-height: 23px;
        }

        .sum-quantity {
          font-size: 18px;
          line-height: 23px;
          color: #767676;
          margin-left: auto;
          margin-right: 11px;

          strong {
            color: #21bf48;
          }
        }
        .sum-price {
          font-size: 18px;
          line-height: 23px;
          margin-left: 12px;
          color: #21bf48;
          strong {
            font-weight: 700;
            font-size: 36px;
            line-height: 45px;
            margin-right: 2px;
          }
        }
      }
      .btn-box {
        display: flex;
        gap: 14px;
        margin-top: 22px;
      }
    }
  }
`;
