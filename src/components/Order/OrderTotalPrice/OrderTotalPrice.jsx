import { OrderTotalPriceWrapper } from "./styled";

const OrderTotalPrice = ({ totalPrice }) => {
  const convertedTotalPrice = totalPrice
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <OrderTotalPriceWrapper>
      총 주문금액<strong>{convertedTotalPrice}원</strong>
    </OrderTotalPriceWrapper>
  );
};

export default OrderTotalPrice;
