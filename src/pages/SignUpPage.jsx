import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { UserTypeTabCard } from "../components/UI/UserTypeTabCard/UserTypeTabCard";
import Logo from "../components/UI/Logo/Logo";
import UserSignUp from "../components/User/BuyerSignUp/UserSignUp";
import useForm from "../hooks/useForm";
import { postUserIdCheck } from "../lib/api/axios-api";
import { setType } from "../store/slice/userSlice";
import { useState } from "react";

const SignUpPage = () => {
  const dispatch = useDispatch();
  const [isUserId, setIsUserId] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const userType = useSelector((state) => state.user.type);
  const { formData, inputChangeHandler } = useForm({
    username: "",
    password: "",
    password2: "",
    phone_number: "",
    name: "",
    company_registration_number: "",
    store_name: "",
  });

  const {
    username,
    password,
    password2,
    phone_number,
    name,
    company_registration_number,
    store_name,
  } = formData;

  console.log(username);

  const mutation = useMutation(postUserIdCheck, {
    onSuccess(data) {},
    onError(err) {},
  });

  const setUserTypeChange = (type) => {
    dispatch(setType(type));
  };
  const onCheckUserId = () => {
    mutation.mutate();
  };

  const onSubmitHandler = () => {};

  return (
    <>
      <Logo />
      <UserTypeTabCard type={userType}>
        <button
          type="button"
          onClick={() => {
            setUserTypeChange("BUYER");
          }}
        >
          구매회원가입
        </button>
        <button
          type="button"
          onClick={() => {
            setUserTypeChange("SELLER");
          }}
        >
          판매회원가입
        </button>
      </UserTypeTabCard>
      <UserSignUp
        onChange={inputChangeHandler}
        formData={formData}
        onSubmit={onSubmitHandler}
        onIdCheck={onCheckUserId}
        userType={userType}
      />
    </>
  );
};

export default SignUpPage;
