import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postUserLogin } from "../lib/api/axios-api";
import UserLogin from "../components/User/UserLogin/UserLogin";
import useForm from "../hooks/useForm";
import UserContext from "../store/user/user-context";

const LoginPage = () => {
  const [userType, setUserType] = useState("BUYER");
  const userCtx = useContext(UserContext);
  const { setToken } = userCtx;
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

  const requestPostUserLogin = async () => {
    try {
      const response = await postUserLogin(formData);
      setToken(response.token);
      localStorage.setItem("token", response.token);
      navigater(-1);
    } catch (err) {
      console.log(err);
    }
  };

  const userLoginSubmitHanlder = (event) => {
    event.preventDefault();
    requestPostUserLogin();
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
