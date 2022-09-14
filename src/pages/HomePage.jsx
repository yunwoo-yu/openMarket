import MainBanner from "../components/MainBanner/MainBanner";
import ProductsList from "../components/Products/ProductsList/ProductsList";
import { getProductsList } from "../lib/api/axios-api";
import { useContext, useEffect } from "react";
import ProductsContext from "../store/products/products-context";
import MainHeader from "../components/MainHeader/MainHeader";
import UserContext from "../store/user/user-context";

const HomePage = () => {
  const productCtx = useContext(ProductsContext);
  const userCtx = useContext(UserContext);
  const { productList, setProductsList } = productCtx;
  const { token } = userCtx;

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
    <>
      <MainHeader ConfirmLogin={token} />
      <main>
        <MainBanner />
        <ProductsList productData={productList} />
      </main>
    </>
  );
};

export default HomePage;
