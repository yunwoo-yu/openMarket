import MainBanner from "../components/MainBanner/MainBanner";
import MainHeader from "../components/MainHeader/MainHeader";
import ProductsList from "../components/Products/ProductsList/ProductsList";

const Home = () => {
  return (
    <main>
      <MainHeader />
      <MainBanner />
      <ProductsList />
    </main>
  );
};

export default Home;
