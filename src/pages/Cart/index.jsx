import CartHeader from "../../components/Cart/CartHeader/CartHeader";
import CartList from "../../components/Cart/CartList/CartList";
import { CartWrapper, TableWrapper } from "./styled";
import { useMutation, useQuery } from "react-query";
import { getUserCart, setUserCartActive } from "../../lib/api/axios-api";
import Loading from "../../components/common/Loading/Loading";
import { useState } from "react";

const CartPage = () => {
  const { data, isLoading, isError, error } = useQuery("cart", getUserCart, {
    onSuccess(data) {
      setCartData(data);
    },
  });
  const [cartData, setCartData] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const mutation = useMutation(setUserCartActive, {
    onSuccess(res) {
      const cartItemResultIdx = cartData.findIndex(
        (el) => el.product_id === res.product_id
      );

      setCartData((prev) => {
        return [...prev].map((item, idx) => {
          return idx === cartItemResultIdx
            ? {
                ...cartData[cartItemResultIdx],
                is_active: !cartData[cartItemResultIdx].is_active,
              }
            : item;
        });
      });
    },
    onError(err) {
      console.log(err);
    },
  });
  const Incrementmutation = useMutation(setUserCartActive, {
    onSuccess(res) {
      const cartItemResultIdx = cartData.findIndex(
        (el) => el.product_id === res.product_id
      );
      setCartData((prev) => {
        return [...prev].map((item, idx) => {
          return idx === cartItemResultIdx
            ? {
                ...cartData[cartItemResultIdx],
                quantity: cartData[cartItemResultIdx].quantity + 1,
              }
            : item;
        });
      });
    },
    onError(err) {
      console.log(err);
    },
  });
  const Decrementmutation = useMutation(setUserCartActive, {
    onSuccess(res) {
      const cartItemResultIdx = cartData.findIndex(
        (el) => el.product_id === res.product_id
      );

      setCartData((prev) => {
        return [...prev].map((item, idx) => {
          return idx === cartItemResultIdx
            ? {
                ...cartData[cartItemResultIdx],
                quantity: cartData[cartItemResultIdx].quantity - 1,
              }
            : item;
        });
      });
    },
    onError(err) {
      console.log(err);
    },
  });

  const mutationAllCheckBox = useMutation(setUserCartActive);

  const onToggleCheckBox = (id) => {
    const cartItemIdx = cartData.findIndex((el) => el.cart_item_id === id);

    mutation.mutate({
      cart_item_id: cartData[cartItemIdx].cart_item_id,
      product_id: cartData[cartItemIdx].product_id,
      quantity: cartData[cartItemIdx].quantity,
      is_active: !cartData[cartItemIdx].is_active,
    });
  };

  const onClickIncrement = (id) => {
    const cartItemIdx = cartData.findIndex((el) => el.cart_item_id === id);
    console.log(cartItemIdx);
    Incrementmutation.mutate({
      cart_item_id: cartData[cartItemIdx].cart_item_id,
      product_id: cartData[cartItemIdx].product_id,
      quantity: cartData[cartItemIdx].quantity + 1,
      is_active: cartData[cartItemIdx].is_active,
    });
  };

  const onClickDecrement = (id) => {
    const cartItemIdx = cartData.findIndex((el) => el.cart_item_id === id);

    Decrementmutation.mutate({
      cart_item_id: cartData[cartItemIdx].cart_item_id,
      product_id: cartData[cartItemIdx].product_id,
      quantity: cartData[cartItemIdx].quantity - 1,
      is_active: cartData[cartItemIdx].is_active,
    });
  };

  const onToggleCheckBoxAll = () => {
    cartData.forEach((item) => {
      mutationAllCheckBox.mutate({
        cart_item_id: item.cart_item_id,
        product_id: item.product_id,
        quantity: item.quantity,
        is_active: !isActive,
      });
    });
    setIsActive((prev) => !prev);
    setCartData((prev) => {
      return [...prev].map((item, idx) => {
        return { ...item, is_active: !isActive };
      });
    });
  };

  if (isLoading) return <Loading />;
  if (isError) return <p>{error.response.data.detail}</p>;

  return (
    <CartWrapper>
      <h2>장바구니</h2>
      <TableWrapper>
        <CartHeader
          cartStateData={cartData}
          isActive={isActive}
          onToggleCheckBoxAll={onToggleCheckBoxAll}
        />
        <CartList
          cartStateData={cartData}
          onToggleCheckBox={onToggleCheckBox}
          onIncrement={onClickIncrement}
          onDecrement={onClickDecrement}
        />
      </TableWrapper>
    </CartWrapper>
  );
};
export default CartPage;
