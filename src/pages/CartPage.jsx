import MainHeader from "../components/MainHeader/MainHeader";
import UserContext from "../store/user/user-context";
import { useContext } from "react";

const CartPage = () => {
  const userCtx = useContext(UserContext);
  const { token } = userCtx;
  return <MainHeader ConfirmLogin={token} />;
};
export default CartPage;
