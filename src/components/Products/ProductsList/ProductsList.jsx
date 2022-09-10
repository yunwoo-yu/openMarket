import ProductsItem from "../ProductsItem/ProductsItem";
import { InnerContainer } from "../../UI/Layout/InnerContainer";
import { ProductsWrap } from "./styled";

const ProductsList = ({ productData }) => {
  return (
    <InnerContainer>
      <ProductsWrap>
        {productData ? (
          productData.map((item) => (
            <ProductsItem key={item.product_id} item={item} />
          ))
        ) : (
          <p>로딩 스피너 추가 예정</p>
        )}
      </ProductsWrap>
    </InnerContainer>
  );
};
export default ProductsList;
