import ProductsDetail from "../../components/Products/ProductsDetail/ProductsDetail.jsx";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getProductsDetail } from "../../lib/api/axios-api.js";
import { useState } from "react";
import Loading from "../../components/common/Loading/Loading.jsx";

const ProductPage = () => {
  const [amount, setAmount] = useState(1);
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery(["products", id], () =>
    getProductsDetail(id)
  );

  const onClickPlus = () => {
    setAmount((prev) => prev + 1);
  };
  const onClickMinus = () => {
    if (amount > 1) {
      setAmount((prev) => prev - 1);
    }
  };

  if (isLoading) return <Loading />;
  if (isError)
    return (
      <>
        <p>{error.response.data.detail}</p>
      </>
    );
  const convetedPrice = data.price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const convertedSum = (data.price * amount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <>
      <ProductsDetail
        convetedPrice={convetedPrice}
        convertedSum={convertedSum}
        data={data}
        isLoading={isLoading}
        isError={isError}
        error={error}
        onClickPlus={onClickPlus}
        onClickMinus={onClickMinus}
        amount={amount}
      />
    </>
  );
};
export default ProductPage;
