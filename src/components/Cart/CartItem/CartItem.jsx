import { CheckBox } from "../../common/Input/CheckBox/CheckBox";
import QuantityButton from "../../common/QuantityButton/QuantityButton";
import { CartItemWrapper } from "./styled";
import { Button } from "../../common/Button/Button";
import closeImg from "../../../assets/icon-delete.svg";
import Modal from "../../common/Modal/Modal";

const CartItem = ({
  cartStateData,
  isDeleteModal,
  onhandleClick,
  onClickModal,
}) => {
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
      {isDeleteModal && (
        <Modal
          rejectText={"취소"}
          resultText={"확인"}
          onClickReject={() => {
            onClickModal("close");
          }}
          // onClickResult={}
        >
          상품을 삭제하시겠습니까?
        </Modal>
      )}
      <CartItemWrapper>
        <td className="delete-btn" onClick={onClickModal}>
          <img src={closeImg} alt="삭제 버튼" />
        </td>
        <td>
          <CheckBox
            type={"checkbox"}
            checked={is_active}
            onChange={() => {
              onhandleClick("toggleBox", cart_item_id);
            }}
          />
        </td>
        <td>
          <img src={image} alt="장바구니 상품 이미지" />
        </td>
        <td className="text-box">
          <p className="store-name">{store_name}</p>
          <p className="product-name">{product_name}</p>
          <p className="price">{convetedPrice}원</p>
          <p className="delivery">
            {shipping_method} /{" "}
            {convetedShipping_fee === "0"
              ? `무료배송`
              : `${convetedShipping_fee}원`}
          </p>
        </td>
        <td className="quantity-btn">
          <QuantityButton
            num={quantity}
            maxNum={stock}
            onClickMinus={() => {
              onhandleClick("decrement", cart_item_id);
            }}
            onClickPlus={() => {
              onhandleClick("increment", cart_item_id);
            }}
          />
        </td>
        <td className="order-box">
          <p>{convetedTotalPrice}원</p>
          <Button>주문하기</Button>
        </td>
      </CartItemWrapper>
    </>
  );
};

export default CartItem;
