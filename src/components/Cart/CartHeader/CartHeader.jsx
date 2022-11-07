import { CheckBox } from "../../common/Input/CheckBox/CheckBox";
import { CartHeaderWrapper } from "./styled";

const CartHeader = ({
  cartStateData,
  isActive,
  onhandleClick,
  setIsActive,
  setCartData,
}) => {
  return (
    <CartHeaderWrapper>
      <tr>
        <td>
          <CheckBox
            type="checkbox"
            checked={isActive}
            onChange={() => {
              cartStateData.forEach((item) => {
                onhandleClick("toggleBoxAll", item.cart_item_id);
              });
              setIsActive((prev) => !prev);
              setCartData((prev) => {
                return [...prev].map((item) => {
                  return { ...item, is_active: !isActive };
                });
              });
            }}
          />
        </td>
        <td>상품정보</td>
        <td>수량</td>
        <td>상품금액</td>
      </tr>
    </CartHeaderWrapper>
  );
};

export default CartHeader;
