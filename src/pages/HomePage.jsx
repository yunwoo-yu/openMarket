import MainBanner from "../components/MainBanner/MainBanner";
import ProductsList from "../components/Products/ProductsList/ProductsList";

import MainHeader from "../components/MainHeader/MainHeader";
import { useQuery } from "react-query";
import { getProductsList } from "../lib/api/axios-api";

const HomePage = () => {
  const { data, isLoading, isError, error } = useQuery("products", () =>
    getProductsList()
  );
  return (
    <>
      <MainHeader />
      <main>
        <MainBanner />
        <ProductsList
          data={data}
          isLoading={isLoading}
          isError={isError}
          error={error}
        />
      </main>
    </>
  );
};

export default HomePage;
