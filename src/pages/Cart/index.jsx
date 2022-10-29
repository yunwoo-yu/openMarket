import CartHeader from "../../components/Cart/CartHeader/CartHeader";
import CartList from "../../components/Cart/CartList/CartList";
import { CartWrapper, TableWrapper } from "./styled";

const CartPage = () => {
  return (
    <CartWrapper>
      <h2>장바구니</h2>
      <TableWrapper>
        <CartHeader />
        <CartList />
      </TableWrapper>
    </CartWrapper>
  );
};
export default CartPage;
