import CartItem from "../CartItem/CartItem";
import { CartListWrapper } from "./styled";

const CartList = ({
  cartStateData,
  onToggleCheckBox,
  onIncrement,
  onDecrement,
}) => {
  return (
    <CartListWrapper>
      {cartStateData.map((item) => (
        <CartItem
          cartStateData={item}
          key={item.product_id}
          onToggleCheckBox={onToggleCheckBox}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      ))}
    </CartListWrapper>
  );
};

export default CartList;
