import { useState } from "react";
import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { postUserLogOut } from "../../lib/api/axios-api";
import { getToken } from "../../store/slice/userSlice";
import Footer from "../Footer/Footer";
import MainHeader from "../MainHeader/MainHeader";

const LayOut = () => {
  const token = useSelector((state) => state.user.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userMenu, setUserMenu] = useState(false);
  const location = useLocation().pathname;

  const mutation = useMutation(postUserLogOut, {
    onSuccess(data) {
      localStorage.removeItem("token");
      dispatch(getToken(""));
      alert(data.detail);
      window.location.reload();
      navigate("/");
    },
    onError(err) {
      console.log(err);
    },
  });

  const onLogoutHandler = () => {
    mutation.mutate();
  };

  const onUserToggleMenu = () => {
    setUserMenu((prev) => !prev);
  };

  return (
    <>
      <MainHeader
        token={token}
        pathName={location}
        userMenu={userMenu}
        onLogOut={onLogoutHandler}
        onUserToggleMenu={onUserToggleMenu}
      />
      <Outlet />
    </>
  );
};

export default LayOut;
