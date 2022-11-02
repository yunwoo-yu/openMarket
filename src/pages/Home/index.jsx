import MainBanner from "../../components/Banner/MainBanner";
import ProductsList from "../../components/Products/ProductsList/ProductsList";
import { useQuery } from "react-query";
import { getProductsList } from "../../lib/api/axios-api";
import { HomeWrapper } from "./styled";
import Loading from "../../components/common/Loading/Loading";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const HomePage = () => {
  const { data, isLoading, isError, error } = useQuery(
    "products",
    getProductsList
  );

  if (isLoading) return <Loading />;
  if (isError) return <p>{error.response.data.detail}</p>;

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
