import styled from "styled-components";

const MyOrderItemWrapper = styled.li`
  padding: 16px;
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.05);
  background-color: #fff;
  display: flex;

  > img {
    width: 180px;
    height: 180px;
    object-fit: cover;
    margin-right: 24px;
    border-radius: 8px;
  }

  .text-box {
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
  }

  .created-day {
    font-size: 12px;
    color: gray;
  }

  .product-name {
    font-size: 16px;
    margin-top: 8px;
  }

  .total-price {
    font-weight: bold;
    font-size: 18px;
    margin-top: 8px;

    > span {
      font-weight: 400;
    }
  }

  .address,
  .receiver {
    margin-top: 8px;
  }
`;

export default MyOrderItemWrapper;
