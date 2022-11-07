import { CheckBox } from "../../common/Input/CheckBox/CheckBox";
import { CartHeaderWrapper } from "./styled";

const CartHeader = ({
  cartStateData,
  isActive,
  onHandleClick,
  setIsActive,
  setCartData,
}) => {
  return (
    <CartHeaderWrapper>
      <ul>
        <li>
          <CheckBox
            type="checkbox"
            checked={isActive}
            onChange={() => {
              cartStateData.forEach((item) => {
                onHandleClick("toggleBoxAll", item.cart_item_id);
              });
              setIsActive((prev) => !prev);
              setCartData((prev) => {
                return [...prev].map((item) => {
                  return { ...item, is_active: !isActive };
                });
              });
            }}
          />
        </li>
        <li>상품정보</li>
        <li>수량</li>
        <li>상품금액</li>
      </ul>
    </CartHeaderWrapper>
  );
};

export default CartHeader;
