import styled from "styled-components";

export const OrderItemWrapper = styled.ul`
  width: 100%;
  height: 130px;
  padding: 18px 8px;
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 1px solid #c4c4c4;
  margin-bottom: 30px;

  li {
    > img {
      width: 104px;
      height: 104px;
      object-fit: cover;
      border-radius: 10px;
    }
  }

  .text-box {
    width: 524px;
    margin-left: 36px;

    .store-name {
      font-size: 14px;
      line-height: 18px;
      color: #767676;
      margin-bottom: 6px;
    }
    .product-name {
      font-size: 18px;
      line-height: 22px;
      margin-bottom: 10px;
    }
    .product-quantity {
      font-size: 14px;
      line-height: 18px;
      color: #767676;
    }
  }
  .sale {
    text-align: center;
    width: 200px;
  }
  .delivery {
    width: 200px;
    font-size: 18px;
    line-height: 23px;
    color: #767676;
    text-align: center;
  }
  .product-price {
    width: 200px;
    text-align: center;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
  }
`;
