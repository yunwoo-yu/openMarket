import ProductsDetail from "../../components/Products/ProductsDetail/ProductsDetail.jsx";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import {
  getProductsDetail,
  getUserCart,
  postCartItem,
} from "../../lib/api/axios-api.js";
import Modal from "../../components/common/Modal/Modal";
import { useState } from "react";
import Loading from "../../components/common/Loading/Loading.jsx";

const ProductPage = () => {
  const [amount, setAmount] = useState(1);
  const [isModal, setIsModal] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery(["products", id], () =>
    getProductsDetail(id)
  );
  const { data: cartData } = useQuery("cart", getUserCart);

  console.log(data);

  const addCartItemMutation = useMutation(postCartItem, {
    onSuccess(data) {
      setIsModal(true);
    },
    onError(err) {
      console.log(err);
      alert(`${err.response.data.FAIL_message} 현재 재고 : ${data.stock}
      `);
    },
  });

  const isCartItemCheck = () => {
    const isCartItem = cartData.filter(
      (item) => item.product_id === data.product_id
    ).length;

    return isCartItem;
  };

  const onClickProductOrder = () => {
    const orderData = {
      product_id: data.product_id,
      product_name: data.product_name,
      store_name: data.store_name,
      image: data.image,
      price: data.price,
      shipping_fee: data.shipping_fee,
      quantity: amount,
    };
    navigate("/order", {
      state: {
        data: [orderData],
        order_kind: "direct_order",
      },
    });
  };

  const onClickAddProductToCart = () => {
    addCartItemMutation.mutate({
      product_id: data.product_id,
      quantity: amount,
      check: isCartItemCheck() ? true : false,
    });
  };

  const onClickQuantity = (type) => {
    if (type === "increment") {
      setAmount((prev) => prev + 1);
    }
    if (type === "decrement")
      if (amount > 1) {
        setAmount((prev) => prev - 1);
      }
  };

  if (isLoading) return <Loading />;
  if (isError) return <p>{error.response.data.detail}</p>;

  const convetedPrice = data.price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const convertedSum = (data.price * amount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <>
      {isModal &&
        (isCartItemCheck() ? (
          <Modal
            rejectText={"아니요"}
            resultText={"예"}
            onClickReject={() => {
              setIsModal(false);
            }}
            onClickResult={() => {
              navigate("/cart");
            }}
          >
            이미 장바구니에 있는 상품입니다. 장바구니로 이동하시겠습니까?
          </Modal>
        ) : (
          <Modal
            rejectText={"아니요"}
            resultText={"예"}
            onClickReject={() => {
              setIsModal(false);
            }}
            onClickResult={() => {
              navigate("/cart");
            }}
          >
            장바구니에 상품이 담겼습니다. 장바구니로 이동하시겠습니까?
          </Modal>
        ))}
      <ProductsDetail
        convetedPrice={convetedPrice}
        convertedSum={convertedSum}
        data={data}
        isLoading={isLoading}
        isError={isError}
        error={error}
        onClickQuantity={onClickQuantity}
        onClickCartItem={onClickAddProductToCart}
        onClickProductOrder={onClickProductOrder}
        amount={amount}
      />
    </>
  );
};
export default ProductPage;
