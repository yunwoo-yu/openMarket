import { useRef, useState } from "react";
import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserLogin from "../components/User/UserLogin/UserLogin";
import useForm from "../hooks/useForm";
import { postUserLogin } from "../lib/api/axios-api";
import { getToken, setType } from "../store/slice/userSlice";
const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [validation, setValidation] = useState("");
  const userType = useSelector((state) => state.user.type);
  const idRef = useRef();
  const passwordRef = useRef();
  const { formData, inputChangeHandler } = useForm({
    username: "",
    password: "",
    login_type: "",
  });
  formData.login_type = userType;

  const mutation = useMutation(postUserLogin, {
    onSuccess(data) {
      localStorage.setItem("token", data.token);
      dispatch(getToken(data.token));
      navigate(-1);
    },
    onError(err) {
      idRef.current.focus();
      setValidation("아이디 또는 비밀번호가 일치하지 않습니다.");
      console.log(err);
    },
  });

  const setUserTypeChange = (type) => {
    dispatch(setType(type));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!formData.username) {
      idRef.current.focus();
      return setValidation("아이디를 입력해 주세요.");
    }
    if (!formData.password) {
      passwordRef.current.focus();
      return setValidation("비밀번호를 입력해 주세요.");
    }
    mutation.mutate(formData);
  };

  console.log(userType);

  return (
    <>
      <UserLogin
        passwordRef={passwordRef}
        idRef={idRef}
        onTypeChange={setUserTypeChange}
        onChange={inputChangeHandler}
        formData={formData}
        UserType={userType}
        errorMessage={validation}
        onSubmit={onSubmitHandler}
      />
    </>
  );
};
export default LoginPage;
