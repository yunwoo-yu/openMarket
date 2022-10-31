import { CheckBox } from "../../common/Input/CheckBox/CheckBox";
import { CartHeaderWrapper } from "./styled";

const CartHeader = ({ cartStateData, onToggleCheckBoxAll, isActive }) => {
  return (
    <CartHeaderWrapper>
      <tr>
        <td>
          <CheckBox
            type="checkbox"
            checked={isActive}
            onChange={onToggleCheckBoxAll}
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
