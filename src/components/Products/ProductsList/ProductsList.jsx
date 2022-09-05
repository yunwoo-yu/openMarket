import { useContext, useEffect } from "react";
import ProductsContext from "../../../store/products/products-context";
import ProductsItem from "../ProductsItem/ProductsItem";
import { InnerContainer } from "../../UI/Layout/InnerContainer";
import { ProductsWrap } from "./styled";
import { getProductsList } from "../../../axios-api";

const ProductsList = () => {
  const productCtx = useContext(ProductsContext);
  const { productList, setProductsList } = productCtx;

  const requestGetProductList = async () => {
    try {
      const response = await getProductsList();
      setProductsList(response.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    requestGetProductList();
  }, []);

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
