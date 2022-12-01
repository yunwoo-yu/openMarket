import MainBanner from "../../components/Banner/MainBanner";
import ProductsList from "../../components/Products/ProductsList/ProductsList";
import { useInfiniteQuery } from "react-query";
import { getProductsList } from "../../lib/api/axios-api";
import { HomeWrapper } from "./styled";
import Loading from "../../components/common/Loading/Loading";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const HomePage = () => {
  const { ref, inView } = useInView();
  const { data, isLoading, isError, error, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery(
      "products",
      ({ pageParam = 1 }) => getProductsList(pageParam),
      {
        getNextPageParam: (lastPage) => {
          if (lastPage.isNext) return lastPage.nextPage;
        },
      }
    );

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  if (isLoading) return <Loading />;
  if (isError) return <p>{error.response.data.detail}</p>;

  return (
    <>
      <HomeWrapper>
        <MainBanner />
        <ProductsList
          data={data}
          isLoading={isLoading}
          isError={isError}
          error={error}
        />
        {isFetchingNextPage ? <Loading /> : <div ref={ref}></div>}
      </HomeWrapper>
    </>
  );
};

export default HomePage;
