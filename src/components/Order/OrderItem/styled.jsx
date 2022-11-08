import styled from "styled-components";

export const OrderItemWrapper = styled.ul`
  width: 100%;
  height: 130px;
  padding: 8px 78px 17px 8px;
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 1px solid #c4c4c4;
  gap: 16px;
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
    width: 442px;
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
    margin-left: 111px;
  }
  .delivery {
    font-size: 18px;
    line-height: 23px;
    color: #767676;
    margin-left: 193px;
  }
  .product-price {
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    margin-left: auto;
  }
`;
