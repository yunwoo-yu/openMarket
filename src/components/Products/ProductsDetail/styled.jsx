import styled from "styled-components";

export const DetailWrapper = styled.section`
  margin-top: 80px;
  display: flex;

  .product-data {
    display: flex;
    gap: 50px;
    img {
      width: 600px;
      object-fit: contain;
    }
    .detail-text-box {
      width: 100%;
      .quantity-box {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 50px;
        border: 1px solid #c4c4c4;
        border-radius: 5px;
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
      }
    }
  }
`;
