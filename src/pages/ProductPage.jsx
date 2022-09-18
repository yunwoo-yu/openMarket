import { useState } from "react";
import { useParams } from "react-router-dom";

import ProductsDetail from "../components/Products/ProductsDetail/ProductsDetail";

const ProductPage = () => {
  const [productData, setProductData] = useState({});
  const [productAmount, setProductAmount] = useState(1);
  const publicUrl = process.env.PUBLIC_URL;
  const { id } = useParams();

  const amountPlus = () => {
    setProductAmount(productAmount + 1);
  };
  const amountMinus = () => {
    productAmount === 1
      ? setProductAmount(1)
      : setProductAmount(productAmount - 1);
  };

  const getPriceWon = () => {
    if (productData.price) {
      return productData.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return "";
  };

  return (
    <ProductsDetail
      urlData={publicUrl}
      Amount={productAmount}
      PriceWon={getPriceWon}
      onClickPlus={amountPlus}
      onClickMinus={amountMinus}
    />
  );
};
export default ProductPage;
