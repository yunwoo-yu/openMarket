import ProductsDetail from "../components/Products/ProductsDetail/ProductsDetail.jsx";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getProductsDetail } from "../lib/api/axios-api.js";
import { useState } from "react";

const ProductPage = () => {
  const [count, setCount] = useState(1);
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery(["products", id], () =>
    getProductsDetail(id)
  );

  const countPlusHandler = () => {
    setCount((prev) => prev + 1);
  };
  const countMiunsHandler = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <>
      <ProductsDetail
        data={data}
        isLoading={isLoading}
        isError={isError}
        error={error}
        count={count}
        onClickPlus={countPlusHandler}
        onClickMinus={countMiunsHandler}
      />
    </>
  );
};
export default ProductPage;
