import { useState } from "react";
import { useMutation } from "react-query";
import { setUserCartActive } from "../../../lib/api/axios-api";
import { CheckBox } from "../../common/Input/CheckBox/CheckBox";
import { CartItemWrapper } from "./styled";

const CartItem = ({ data }) => {
  const {
    is_active,
    product_id,
    quantity,
    cart_item_id,
    image,
    product_name,
    shipping_fee,
    shipping_method,
    store_name,
    price,
  } = data;
  const [isActive, setIsActive] = useState(is_active);
  const convetedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const convetedShipping_fee = shipping_fee
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const mutation = useMutation(setUserCartActive, {
    onSuccess(data) {
      setIsActive((prev) => !prev);
      console.log(data);
    },
    onError(err) {
      console.log(err);
    },
  });

  const onToggleCheckBox = () => {
    mutation.mutate({
      cart_item_id,
      product_id,
      quantity,
      is_active: !isActive,
    });
  };

  return (
    <CartItemWrapper>
      <td>
        <CheckBox
          type={"checkbox"}
          checked={isActive}
          onChange={onToggleCheckBox}
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
          {shipping_method} / {convetedShipping_fee}원
        </p>
      </td>
      <td></td>
    </CartItemWrapper>
  );
};

export default CartItem;
