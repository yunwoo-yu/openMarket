import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserLogin from "../components/User/UserLogin/UserLogin";
import useForm from "../hooks/useForm";

const LoginPage = () => {
  const [userType, setUserType] = useState("BUYER");

  const navigater = useNavigate();
  const { formData, inputChangeHandler } = useForm({
    username: "",
    password: "",
    login_type: "",
  });

  formData.login_type = userType;

  const userTypeHandler = (type) => {
    setUserType(type);
  };

  const userLoginSubmitHanlder = (event) => {
    event.preventDefault();
  };

  return (
    <UserLogin
      userType={userType}
      formData={formData}
      onClickType={userTypeHandler}
      onChangeInput={inputChangeHandler}
      onClickLogin={userLoginSubmitHanlder}
    />
  );
};
export default LoginPage;
