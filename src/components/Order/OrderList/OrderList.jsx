import OrderItem from "../OrderItem/OrderItem";
import { OrderListWrapper } from "./styled";

const OrderList = () => {
  return (
    <OrderListWrapper>
      <h3 className="hidden">주문 상품 목록</h3>
      <OrderItem />
    </OrderListWrapper>
  );
};

export default OrderList;
