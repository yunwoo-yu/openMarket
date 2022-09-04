import { useContext, useEffect } from "react";
import { DefaultWrapper } from "../../UI/Layout/DefaultWrapper";
import ProductsContext from "../../../store/products/products-context";
import ProductsItem from "../ProductsItem/ProductsItem";
import { InnerContainer } from "../../UI/Layout/InnerContainer";
import { ProductsWrap } from "./styled";

const ProductsList = () => {
  const productCtx = useContext(ProductsContext);
  const { productList } = productCtx;
  useEffect(() => {
    productCtx.getProducts();
  }, []);
  console.log(productList);

  return (
    <InnerContainer>
      <ProductsWrap>
        {productList ? (
          productList.map((item) => (
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
