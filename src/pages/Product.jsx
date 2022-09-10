import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsDetail } from "../axios-api";
import ProductsDetail from "../components/Products/ProductsDetail/ProductsDetail";

const Product = () => {
  const [productData, setProductData] = useState({});
  const [productAmount, setProductAmount] = useState(1);

  const { id } = useParams();
  const publicUrl = process.env.PUBLIC_URL;

  const amountPlus = () => {
    setProductAmount(productAmount + 1);
  };
  const amountMinus = () => {
    setProductAmount(productAmount - 1);
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
      onURL={publicUrl}
      onData={productData}
      onAmount={productAmount}
      onSetAmount={setProductAmount}
      onPrice={getPriceWon}
      onPlus={amountPlus}
      onMinus={amountMinus}
    />
  );
};
export default Product;
