import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsDetail } from "../lib/api/axios-api";
import ProductsDetail from "../components/Products/ProductsDetail/ProductsDetail";

const ProductPage = () => {
  const [productData, setProductData] = useState({});
  const [productAmount, setProductAmount] = useState(1);

  const { id } = useParams();
  const publicUrl = process.env.PUBLIC_URL;

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

  const requestGetProductDetail = async () => {
    try {
      const response = await getProductsDetail(id);
      setProductData(response);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    requestGetProductDetail();
  }, []);

  return (
    <ProductsDetail
      urlData={publicUrl}
      targetData={productData}
      Amount={productAmount}
      PriceWon={getPriceWon}
      onClickPlus={amountPlus}
      onClickMinus={amountMinus}
    />
  );
};
export default ProductPage;
