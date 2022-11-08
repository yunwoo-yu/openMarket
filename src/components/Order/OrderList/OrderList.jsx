import OrderItem from "../OrderItem/OrderItem";
import { OrderListWrapper } from "./styled";

const OrderList = ({ data }) => {
  return (
    <OrderListWrapper>
      <h3 className="hidden">주문 상품 목록</h3>
      {data.map((item) => (
        <OrderItem data={item} key={item.product_id} />
      ))}
    </OrderListWrapper>
  );
};

export default OrderList;
