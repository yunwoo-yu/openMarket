import MainBanner from "../components/MainBanner/MainBanner";
import ProductsList from "../components/Products/ProductsList/ProductsList";

import MainHeader from "../components/MainHeader/MainHeader";

const HomePage = () => {
  return (
    <>
      <MainHeader />
      <main>
        <MainBanner />
        <ProductsList />
      </main>
    </>
  );
};

export default HomePage;
