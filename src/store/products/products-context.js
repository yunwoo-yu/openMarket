import React from "react";

const ProductsContext = React.createContext({
  productList: [],
  getProducts: () => {},
});

export default ProductsContext;
