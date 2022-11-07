import { CheckBox } from "../../common/Input/CheckBox/CheckBox";
import QuantityButton from "../../common/QuantityButton/QuantityButton";
import { CartItemWrapper } from "./styled";
import { Button } from "../../common/Button/Button";
import closeImg from "../../../assets/icon-delete.svg";

const CartItem = ({ cartStateData, onHandleClick, onClickModal }) => {
  const {
    is_active,
    quantity,
    cart_item_id,
    image,
    product_name,
    shipping_fee,
    shipping_method,
    store_name,
    stock,
    price,
  } = cartStateData;

  const convetedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const convetedTotalPrice = (quantity * price)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const convetedShipping_fee = shipping_fee
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <>
      <CartItemWrapper>
        <li
          className="delete-btn"
          onClick={() => {
            onClickModal("open", cart_item_id);
          }}
        >
          <img src={closeImg} alt="삭제 버튼" />
        </li>
        <li>
          <CheckBox
            type={"checkbox"}
            checked={is_active}
            onChange={() => {
              onHandleClick("toggleBox", cart_item_id);
            }}
          />
        </li>
        <li>
          <img src={image} alt="장바구니 상품 이미지" />
        </li>
        <li className="text-box">
          <p className="store-name">{store_name}</p>
          <p className="product-name">{product_name}</p>
          <p className="price">{convetedPrice}원</p>
          <p className="delivery">
            {shipping_method} /{" "}
            {convetedShipping_fee === "0"
              ? `무료배송`
              : `${convetedShipping_fee}원`}
          </p>
        </li>
        <li className="quantity-btn">
          <QuantityButton
            num={quantity}
            maxNum={stock}
            onClickMinus={() => {
              onHandleClick("decrement", cart_item_id);
            }}
            onClickPlus={() => {
              onHandleClick("increment", cart_item_id);
            }}
          />
        </li>
        <li className="order-box">
          <p>{convetedTotalPrice}원</p>
          <Button>주문하기</Button>
        </li>
      </CartItemWrapper>
    </>
  );
};

export default CartItem;
