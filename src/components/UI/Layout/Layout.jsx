import { Outlet } from "react-router-dom";
// import Footer from "../../Footer/Footer";
import MainHeader from "../../MainHeader/MainHeader";

const LayOut = () => {
  // const isToken = localStorage.getItem("token");

  return (
    <>
      <MainHeader />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default LayOut;
