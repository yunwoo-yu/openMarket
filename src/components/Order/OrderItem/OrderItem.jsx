import { OrderItemWrapper } from "./styled";

const OrderItem = ({ data }) => {
  const convetedShippingFee = data.shipping_fee
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const convetedPrice = (data.price * data.quantity)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <OrderItemWrapper>
      <li>
        <img src={data.image} alt="주문 상품 이미지" />
      </li>
      <li className="text-box">
        <p className="store-name">{data.store_name}</p>
        <p className="product-name">{data.product_name}</p>
        <p className="product-quantity">수량 : {data.quantity}개</p>
      </li>
      <li className="sale">-</li>
      <li className="delivery">
        {data.shipping_fee ? `${convetedShippingFee} 원` : "무료배송"}
      </li>
      <li className="product-price">{convetedPrice}원</li>
    </OrderItemWrapper>
  );
};

export default OrderItem;
