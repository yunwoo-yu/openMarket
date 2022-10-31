import CartItem from "../CartItem/CartItem";
import { CartListWrapper } from "./styled";

const CartList = ({ cartStateData, onToggleCheckBox }) => {
  return (
    <CartListWrapper>
      {cartStateData.map((item) => (
        <CartItem
          cartStateData={item}
          key={item.product_id}
          onToggleCheckBox={onToggleCheckBox}
        />
      ))}
    </CartListWrapper>
  );
};

export default CartList;
