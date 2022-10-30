import CartHeader from "../../components/Cart/CartHeader/CartHeader";
import CartList from "../../components/Cart/CartList/CartList";
import { CartWrapper, TableWrapper } from "./styled";
import { useQuery } from "react-query";
import { getUserCart } from "../../lib/api/axios-api";
import Loading from "../../components/common/Loading/Loading";
import { useState } from "react";

const CartPage = () => {
  const { data, isLoading, isError, error } = useQuery("cart", getUserCart);

  if (isLoading) return <Loading />;
  if (isError) return <p>{error.response.data.detail}</p>;
  console.log(data);

  return (
    <CartWrapper>
      <h2>장바구니</h2>
      <TableWrapper>
        <CartHeader />
        <CartList data={data} />
      </TableWrapper>
    </CartWrapper>
  );
};
export default CartPage;
