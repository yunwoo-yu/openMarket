import React from "react";

const ProductsContext = React.createContext({
  productList: [],
  setProductList: null,
});

export default ProductsContext;
