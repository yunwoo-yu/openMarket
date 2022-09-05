import { useState } from "react";
import ProductsContext from "./products-context";

const ProductsProvider = (props) => {
  const [productList, setProductsList] = useState([]);

  const productsContext = {
    productList,
    setProductsList,
  };

  return (
    <ProductsContext.Provider value={productsContext}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
