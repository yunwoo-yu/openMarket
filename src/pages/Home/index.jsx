import MainBanner from "../../components/Banner/MainBanner";
import ProductsList from "../../components/Products/ProductsList/ProductsList";
import { useQuery } from "react-query";
import { getProductsList } from "../../lib/api/axios-api";
import { HomeWrapper } from "./styled";

const HomePage = () => {
  const { data, isLoading, isError, error } = useQuery("products", () =>
    getProductsList()
  );
  return (
    <HomeWrapper>
      <MainBanner />
      <ProductsList
        data={data}
        isLoading={isLoading}
        isError={isError}
        error={error}
      />
    </HomeWrapper>
  );
};

export default HomePage;
