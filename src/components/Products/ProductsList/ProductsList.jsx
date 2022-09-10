import ProductsItem from "../ProductsItem/ProductsItem";
import { InnerContainer } from "../../UI/Layout/InnerContainer";
import { ProductsWrap } from "./styled";

const ProductsList = ({ onProduct }) => {
  return (
    <InnerContainer>
      <ProductsWrap>
        {onProduct ? (
          onProduct.map((item) => (
            <ProductsItem key={item.product_id} item={item} />
          ))
        ) : (
          <p>로딩중...</p>
        )}
      </ProductsWrap>
    </InnerContainer>
  );
};
export default ProductsList;
