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

  const countPlusHandler = () => {
    setAmount((prev) => prev + 1);
  };
  const countMiunsHandler = () => {
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

  return (
    <>
      <ProductsDetail
        data={data}
        isLoading={isLoading}
        isError={isError}
        error={error}
        amount={amount}
        onClickPlus={countPlusHandler}
        onClickMinus={countMiunsHandler}
      />
    </>
  );
};
export default ProductPage;
