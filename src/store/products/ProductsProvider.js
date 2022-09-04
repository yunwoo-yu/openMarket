import { useState } from "react";
import { getProductsList } from "../../axios-api";
import ProductsContext from "./products-context";

const ProductsProvider = (props) => {
  const [productList, setProductsList] = useState([]);

  const getProducts = async () => {
    try {
      const response = await getProductsList.get("/products");
      setProductsList(response.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  const productsContext = {
    productList: productList,
    getProducts: getProducts,
  };

  return (
    <ProductsContext.Provider value={productsContext}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
