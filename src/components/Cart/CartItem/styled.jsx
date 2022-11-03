import styled from "styled-components";

export const CartItemWrapper = styled.tr`
  width: 100%;
  height: 200px;
  padding: 20px 100px 20px 30px;
  display: flex;
  align-items: center;
  border: 2px solid #e0e0e0;
  border-radius: 10px;

  td {
    > img {
      width: 160px;
      height: 160px;
      object-fit: cover;
      margin-left: 40px;
      border-radius: 10px;
    }
  }

  .text-box {
    width: 418px;
    height: 100%;
    margin-left: 36px;
    text-align: left;

    .store-name {
      font-size: 14px;
      line-height: 18px;
      color: #767676;
      margin-bottom: 10px;
    }
    .product-name {
      font-size: 18px;
      line-height: 22px;
      margin-bottom: 10px;
    }
    .price {
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 40px;
    }
    .delivery {
      font-size: 14px;
      line-height: 18px;
      color: #767676;
    }
  }

  .order-box {
    margin-left: 145px;

    > p {
      text-align: center;
      font-weight: 700;
      font-size: 18px;
      line-height: 23px;
      color: #eb5757;
      margin-bottom: 26px;
    }
    > button {
      width: 130px;
    }
  }

  .quantity-btn {
    margin-left: 40px;
  }
`;
