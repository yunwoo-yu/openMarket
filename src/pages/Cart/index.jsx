import CartHeader from "../../components/Cart/CartHeader/CartHeader";
import CartList from "../../components/Cart/CartList/CartList";
import { CartWrapper } from "./styled";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  deleteCartItem,
  getUserCart,
  setUserCart,
} from "../../lib/api/axios-api";
import Loading from "../../components/common/Loading/Loading";
import { useState } from "react";
import CartTotalPrice from "../../components/Cart/CartTotalPrice/CartTotalPrice";
import Modal from "../../components/common/Modal/Modal";

const CartPage = () => {
  const { data, isLoading, isError, error } = useQuery("cart", getUserCart, {
    onSuccess(data) {
      setCartData(data);
    },
  });
  const [cartData, setCartData] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [selectedCartId, setSelectedCartId] = useState();
  const queryClient = useQueryClient();

  const toggleMutation = useMutation(setUserCart, {
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

  const incrementMutation = useMutation(setUserCart, {
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
  const decrementMutation = useMutation(setUserCart, {
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

  const deleteCartItemMutation = useMutation(deleteCartItem, {
    onSuccess(message) {
      queryClient.invalidateQueries("cart");
      setIsDeleteModal(false);
    },
    onError(err) {
      console.log(err);
    },
  });
  const allCheckBoxToggleMutation = useMutation(setUserCart);

  const getProps = (type, id) => {
    const cartItemIdx = cartData.findIndex((el) => el.cart_item_id === id);
    const cartItem = cartData[cartItemIdx];
    const addCount = type === "increment" ? 1 : type === "decrement" ? -1 : 0;

    return {
      cart_item_id: cartItem.cart_item_id,
      product_id: cartItem.product_id,
      quantity: cartItem.quantity + addCount,
      is_active:
        type === "toggleBox"
          ? !cartItem.is_active
          : type === "toggleBoxAll"
          ? !isActive
          : !cartItem.is_active,
    };
  };

  const getEvent = (type) => {
    const events = {
      increment: incrementMutation.mutate,
      decrement: decrementMutation.mutate,
      toggleBox: toggleMutation.mutate,
      toggleBoxAll: allCheckBoxToggleMutation.mutate,
    };

    return events[type];
  };

  const HandleClick = (type, id) => {
    const event = getEvent(type);
    const props = getProps(type, id);

    event(props);
  };

  const onClickModal = (type, item_Id) => {
    type === "close" ? setIsDeleteModal(false) : setIsDeleteModal(true);
    setSelectedCartId(item_Id);
  };

  const onClickDeleteItem = () => {
    deleteCartItemMutation.mutate(selectedCartId);
  };

  const sumCartItem = cartData.reduce(
    (acc, cur) => {
      if (cur.is_active) {
        return (acc = {
          price: acc.price + cur.price * cur.quantity,
          shipping_fee: acc.shipping_fee + cur.shipping_fee,
        });
      }
      return acc;
    },
    { price: 0, shipping_fee: 0 }
  );

  if (isLoading) return <Loading />;
  if (isError) return <p>{error.response.data.detail}</p>;
  console.log(selectedCartId);
  return (
    <CartWrapper>
      <h2>장바구니</h2>
      <CartHeader
        cartStateData={cartData}
        isActive={isActive}
        setIsActive={setIsActive}
        setCartData={setCartData}
        onHandleClick={HandleClick}
      />
      {isDeleteModal && (
        <Modal
          rejectText={"취소"}
          resultText={"확인"}
          onClickReject={() => {
            onClickModal("close");
          }}
          onClickResult={() => {
            onClickDeleteItem();
          }}
        >
          상품을 삭제하시겠습니까?
        </Modal>
      )}
      <CartList
        cartStateData={cartData}
        onHandleClick={HandleClick}
        onClickModal={onClickModal}
      />
      <CartTotalPrice sumCartItem={sumCartItem} />
    </CartWrapper>
  );
};
export default CartPage;
