import { OrderTotalPriceWrapper } from "./styled";

const OrderTotalPrice = ({ data }) => {
  // const convetedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // const convetedShippingFee = shipping_fee
  //   .toString()
  //   .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const convertedTotalPrice = data
    .reduce((acc, cur) => {
      acc += cur.price * cur.quantity;
      acc += cur.shipping_fee;
      return acc;
    }, 0)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  console.log(convertedTotalPrice);
  return (
    <OrderTotalPriceWrapper>
      총 주문금액<strong>{convertedTotalPrice}원</strong>
    </OrderTotalPriceWrapper>
  );
};

export default OrderTotalPrice;
