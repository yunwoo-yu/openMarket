import { InnerWrapper } from "../../UI/Layout/InnerWrapper";
import Loading from "../../UI/Loading/Loading";
import ProductsItem from "../ProductsItem/ProductsItem";
import { ProductsWrap } from "./styled";

const ProductsList = ({ data, isLoading, isError, error }) => {
  if (isLoading) return <Loading />;
  if (isError) return <p>{error.response.data.detail}</p>;
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
