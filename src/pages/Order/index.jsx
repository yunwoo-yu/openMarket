import { useLocation } from "react-router-dom";
import OrderList from "../../components/Order/OrderList/OrderList";
import { OrderWrapper } from "./styled";

const OrderPage = () => {
  const location = useLocation();
  console.log(location);
  return (
    <OrderWrapper>
      <h2>주문/결제하기</h2>

      <OrderList />
    </OrderWrapper>
  );
};

export default OrderPage;
