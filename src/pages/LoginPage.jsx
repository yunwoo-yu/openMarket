import { useState } from "react";
import UserLogin from "../components/User/UserLogin/UserLogin";

const LoginPage = () => {
  const [type, setType] = useState("BUYER");
  const TabClickHandler = (type) => {
    setType(type);
  };

  return <UserLogin onClickType={TabClickHandler} setUserType={type} />;
};
export default LoginPage;
