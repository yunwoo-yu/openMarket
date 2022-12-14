import CartItem from "../CartItem/CartItem";
import { CartListWrapper } from "./styled";

const CartList = ({
  cartStateData,
  isDeleteModal,
  onHandleClick,
  onClickModal,
  onClickOneCartOrder,
}) => {
  return (
    <CartListWrapper>
      <h3 className="hidden">장바구니 목록</h3>
      {cartStateData.map((item) => (
        <CartItem
          cartStateData={item}
          key={item.product_id}
          isDeleteModal={isDeleteModal}
          onClickModal={onClickModal}
          onHandleClick={onHandleClick}
          onClickOneCartOrder={onClickOneCartOrder}
        />
      ))}
    </CartListWrapper>
  );
};

export default CartList;
