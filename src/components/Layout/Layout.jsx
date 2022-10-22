import { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import MainHeader from "../MainHeader/MainHeader";

const LayOut = () => {
  const token = useSelector((state) => state.user.token);
  let location = useLocation().pathname;
  const [userMenu, setUserMenu] = useState(false);

  const userToggleMenu = () => {
    setUserMenu((prev) => !prev);
  };

  return (
    <>
      <MainHeader
        token={token}
        pathName={location}
        userMenu={userMenu}
        onToggleUserMenu={userToggleMenu}
      />
      <Outlet />
      {token && <Footer />}
    </>
  );
};

export default LayOut;
