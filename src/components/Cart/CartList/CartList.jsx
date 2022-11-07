import CartItem from "../CartItem/CartItem";
import { CartListWrapper } from "./styled";

const CartList = ({
  cartStateData,
  onhandleClick,
  onClickModal,
  isDeleteModal,
}) => {
  return (
    <CartListWrapper>
      {cartStateData.map((item) => (
        <CartItem
          cartStateData={item}
          key={item.product_id}
          isDeleteModal={isDeleteModal}
          onClickModal={onClickModal}
          onhandleClick={onhandleClick}
        />
      ))}
    </CartListWrapper>
  );
};

export default CartList;
