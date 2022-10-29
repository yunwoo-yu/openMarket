import { DefaultWrapper } from "../../common/Wrapper/DefaultWrapper";
import { InnerWrapper } from "../../common/Wrapper/InnerWrapper";
import Loading from "../../common/Loading/Loading";
import ProductsItem from "../ProductsItem/ProductsItem";
import { ProductsWrap } from "./styled";

const ProductsList = ({ data, isLoading, isError, error }) => {
  if (isLoading) return <Loading />;
  if (isError) return <p>{error.response.data.detail}</p>;
  return (
    <DefaultWrapper>
      <h2 className="hidden">상품리스트</h2>
      <InnerWrapper>
        <ProductsWrap>
          {data.results.map((item) => (
            <ProductsItem data={item} key={item.product_id} />
          ))}
        </ProductsWrap>
      </InnerWrapper>
    </DefaultWrapper>
  );
};
export default ProductsList;
