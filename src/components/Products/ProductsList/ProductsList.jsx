import { InnerWrapper } from "../../UI/Layout/InnerWrapper";
import ProductsItem from "../ProductsItem/ProductsItem";
import { ProductsWrap } from "./styled";

const ProductsList = ({ data, isLoading, isError, error }) => {
  if (isLoading) return <h2>로딩중!!!!!</h2>;
  if (isError)
    return (
      <>
        <p>{error.response.data.detail}</p>
      </>
    );
  return (
    <InnerWrapper>
      <ProductsWrap>
        {data.results.map((item) => (
          <ProductsItem data={item} key={item.product_id} />
        ))}
      </ProductsWrap>
    </InnerWrapper>
  );
};
export default ProductsList;
