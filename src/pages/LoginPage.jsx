import { useState } from "react";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserLogin from "../components/User/UserLogin/UserLogin";
import useForm from "../hooks/useForm";
import { postUserLogin } from "../lib/api/axios-api";
import { getToken } from "../store/slice/userSlice";
const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [type, setType] = useState("BUYER");
  const [validation, setValidation] = useState("");
  const { formData, inputChangeHandler } = useForm({
    username: "",
    password: "",
    login_type: "",
  });

  formData.login_type = type;

  const mutation = useMutation(postUserLogin, {
    onSuccess(data) {
      localStorage.setItem("token", data.token);
      dispatch(getToken(data.token));
      navigate(-1);
    },
    onError(err) {
      setValidation("아이디 또는 비밀번호가 일치하지 않습니다.");
      console.log(err);
    },
  });

  const TabClickHandler = (type) => {
    setType(type);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!formData.username) {
      return setValidation("아이디를 입력해 주세요.");
    }
    if (!formData.password) {
      return setValidation("비밀번호를 입력해 주세요.");
    }
    mutation.mutate(formData);
  };

  return (
    <UserLogin
      onClickType={TabClickHandler}
      onChange={inputChangeHandler}
      formData={formData}
      UserType={type}
      errorMessage={validation}
      onSubmit={onSubmitHandler}
    />
  );
};
export default LoginPage;
