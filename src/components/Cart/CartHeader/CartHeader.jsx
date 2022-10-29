import { CartHeaderWrapper } from "./styled";

const CartHeader = () => {
  return (
    <CartHeaderWrapper>
      <tr>
        <td>
          <input type="checkbox" />
        </td>
        <td>상품정보</td>
        <td>수량</td>
        <td>상품금액</td>
      </tr>
    </CartHeaderWrapper>
  );
};

export default CartHeader;
