import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { UserTypeTabCard } from "../components/UI/UserTypeTabCard/UserTypeTabCard";
import Logo from "../components/UI/Logo/Logo";
import UserSignUp from "../components/User/BuyerSignUp/UserSignUp";
import { postUserIdCheck } from "../lib/api/axios-api";
import { setType } from "../store/slice/userSlice";
import { useState } from "react";

const SignUpPage = () => {
  const dispatch = useDispatch();
  const userType = useSelector((state) => state.user.type);
  const [terms, setTerms] = useState(false);
  const [values, setValues] = useState({
    username: "",
    password: "",
    password2: "",
    phone_number: "",
    name: "",
    company_registration_number: "",
    store_name: "",
  });
  const [isBlurs, setIsBlurs] = useState({
    username: false,
    password: false,
    password2: false,
    phone_number: false,
    name: false,
    company_registration_number: false,
    store_name: false,
  });
  const [errors, setErrors] = useState({
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
  } = values;

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

  const onBlurHandler = (event) => {
    setIsBlurs({
      ...isBlurs,
      [event.target.name]: true,
    });

    if (!event.target.value) {
      setErrors({ ...errors, [event.target.name]: "필수 정보입니다." });
    }
  };
  const userNameRegExp = /^[a-z]+[a-zA-Z0-9]{5,19}$/g.test(username);
  const passwordRegExp = /^(?=.*[a-z])(?=.*[0-9]).{8,16}$/g.test(password);

  const onChangeHandler = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });

    if (!userNameRegExp && event.target.name === "username") {
      setIsBlurs({
        ...isBlurs,
        [event.target.name]: true,
      });
      return setErrors({
        ...errors,
        [event.target.name]:
          "6자 이상 20자 이내의 영문 소문자, 대문자, 숫자만 사용 가능합니다.",
      });
    } else {
      setErrors({
        ...errors,
        [event.target.name]: "",
      });
    }
    if (!passwordRegExp && event.target.name === "password") {
      setIsBlurs({
        ...isBlurs,
        [event.target.name]: true,
      });
      return setErrors({
        ...errors,
        [event.target.name]: "비밀번호는 8자 이상, 영소문자를 포함해야 합니다.",
      });
    } else {
      setErrors({
        ...errors,
        [event.target.name]: "",
      });
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

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
        onChange={onChangeHandler}
        formData={values}
        errorsData={errors}
        setTerms={setTerms}
        terms={terms}
        onSubmit={onSubmitHandler}
        onIdCheck={onCheckUserId}
        onBlur={onBlurHandler}
        isBlur={isBlurs}
        userType={userType}
      />
    </>
  );
};

export default SignUpPage;
