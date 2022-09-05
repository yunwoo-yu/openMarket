import styled from "styled-components";

export const Product = styled.li`
  max-width: 380px;
  margin-right: 70px;
  margin-top: 78px;

  &:nth-child(3n + 0) {
    margin-right: 0;
  }
  a {
    img {
      display: block;
      width: 100%;
      height: 380px;
      object-fit: cover;
      border: 1px solid #c4c4c4;
      border-radius: 10px;
    }

    > ul {
      > .store_title {
        margin: 16px 0 10px;
        font-size: 16px;
        line-height: 22px;
        color: #767676;
      }
      > .product_name {
        margin-bottom: 10px;
        font-size: 18px;
        line-height: 22px;
        color: #000;
      }
      > .product_price {
        font-size: 24px;
        line-height: 30px;
        font-weight: 700;
        color: #000;
      }
    }
  }
`;
