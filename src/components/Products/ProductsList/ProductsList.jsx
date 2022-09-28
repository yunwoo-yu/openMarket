import { useState } from "react";
import { useQuery } from "react-query";
import { getProductsList } from "../../../lib/api/axios-api";
import { InnerContainer } from "../../UI/Layout/InnerContainer";
import ProductsItem from "../ProductsItem/ProductsItem";
import { ProductsWrap } from "./styled";

const ProductsList = () => {
  const { data, isLoading, isError, error } = useQuery("products", () =>
    getProductsList()
  );
  if (isLoading) return <h2>로딩중!!!!!</h2>;
  if (isError)
    return (
      <>
        <p>{error.response.data.detail}</p>
      </>
    );
  return (
    <InnerContainer>
      <ProductsWrap>
        {data.results.map((item) => (
          <ProductsItem data={item} key={item.product_id} />
        ))}
      </ProductsWrap>
    </InnerContainer>
  );
};
export default ProductsList;
