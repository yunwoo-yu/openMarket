import { Button } from "../../common/Button/Button";
import { CartTotalPriceWrapper } from "./styled";

const CartTotalPrice = ({ sumCartItem, onClickCartOrder }) => {
  const { price, shipping_fee } = sumCartItem;

  const convetedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const convetedShippingFee = shipping_fee
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const convertedTotalPrice = (price + shipping_fee)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <CartTotalPriceWrapper>
      <ul>
        <li>
          총 상품 금액
          <p>
            {convetedPrice}
            <span>원</span>
          </p>
        </li>
        <li>
          상품할인
          <p>
            0<span>원</span>
          </p>
        </li>
        <li>
          배송비
          <p>
            {convetedShippingFee}
            <span>원</span>
          </p>
        </li>
        <li>
          결제 예정 금액
          <p>
            {convertedTotalPrice}
            <span>원</span>
          </p>
        </li>
      </ul>
      <Button size="large" onClick={onClickCartOrder}>
        주문하기
      </Button>
    </CartTotalPriceWrapper>
  );
};

export default CartTotalPrice;
