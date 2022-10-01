import ProductsDetail from "../components/Products/ProductsDetail/ProductsDetail.jsx";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getProductsDetail } from "../lib/api/axios-api.js";
import MainHeader from "../components/MainHeader/MainHeader.jsx";

const ProductPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery(["products", id], () =>
    getProductsDetail(id)
  );

  return (
    <>
      <MainHeader />
      <ProductsDetail
        data={data}
        isLoading={isLoading}
        isError={isError}
        error={error}
      />
    </>
  );
};
export default ProductPage;
