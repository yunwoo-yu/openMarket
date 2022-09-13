import { useState } from "react";
import UserLogin from "../components/User/UserLogin/UserLogin";

const Login = () => {
  const [userType, setUserType] = useState("BUYER");

  const userTypeHandler = (type) => {
    setUserType(type);
  };

  return <UserLogin userType={userType} onClickType={userTypeHandler} />;
};
export default Login;
