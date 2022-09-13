import MainBanner from "../components/MainBanner/MainBanner";
import ProductsList from "../components/Products/ProductsList/ProductsList";
import { getProductsList } from "../axios-api";
import { useContext, useEffect } from "react";
import ProductsContext from "../store/products/products-context";
import MainHeader from "../components/MainHeader/MainHeader";

const Home = () => {
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
    <>
      <MainHeader />
      <main>
        <MainBanner />
        <ProductsList productData={productList} />
      </main>
    </>
  );
};

export default Home;
