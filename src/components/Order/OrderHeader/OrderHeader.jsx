import { OrderHeaderWrapper } from "./styled";

const OrderHeader = () => {
  return (
    <OrderHeaderWrapper>
      <ul>
        <li>상품정보</li>
        <li>할인</li>
        <li>배송비</li>
        <li>주문금액</li>
      </ul>
    </OrderHeaderWrapper>
  );
};

export default OrderHeader;
