import { CheckBox } from "../../common/Input/CheckBox/CheckBox";
import { CartHeaderWrapper } from "./styled";

const CartHeader = () => {
  return (
    <CartHeaderWrapper>
      <tr>
        <td>
          <CheckBox type="checkbox" />
        </td>
        <td>상품정보</td>
        <td>수량</td>
        <td>상품금액</td>
      </tr>
    </CartHeaderWrapper>
  );
};

export default CartHeader;
