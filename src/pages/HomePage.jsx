import MainBanner from "../components/Banner/MainBanner";
import ProductsList from "../components/Products/ProductsList/ProductsList";
import { useQuery } from "react-query";
import { getProductsList } from "../lib/api/axios-api";

const HomePage = () => {
  const { data, isLoading, isError, error } = useQuery("products", () =>
    getProductsList()
  );
  return (
    <>
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
