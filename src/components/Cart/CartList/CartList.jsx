import CartItem from "../CartItem/CartItem";
import { CartListWrapper } from "./styled";

const CartList = ({ data, isCheck, onToggleCheckBox }) => {
  return (
    <CartListWrapper>
      {data.map((item) => (
        <CartItem
          data={item}
          key={item.product_id}
          isCheck={isCheck}
          onToggleCheckBox={onToggleCheckBox}
        />
      ))}
    </CartListWrapper>
  );
};

export default CartList;
