import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { UserTypeTabCard } from "../../components/User/UserTypeTabCard/UserTypeTabCard";
import Logo from "../../components/common/Logo/Logo";
import UserSignUp from "../../components/User/UserSignUp/UserSignUp";
import {
  postCompanyRegistrationNumberCheck,
  postSignUpBuyer,
  postSignUpSeller,
  postUserIdCheck,
} from "../../lib/api/axios-api";
import { setType } from "../../store/slice/userSlice";
import { useState } from "react";
import { useRef } from "react";

const SignUpPage = () => {
  const initialState = {
    username: "",
    password: "",
    password2: "",
    phone_number: "",
    name: "",
    company_registration_number: "",
    store_name: "",
  };
  const dispatch = useDispatch();
  const userType = useSelector((state) => state.user.type);
  const idRef = useRef();
  const [idDuplicateCheck, setIdDuplicateCheck] = useState("");
  const [companyNumberCheck, setCompanyNumberCheck] = useState("");
  const [terms, setTerms] = useState(false);
  const [values, setValues] = useState({ ...initialState });
  const [errors, setErrors] = useState({ ...initialState });
  const [isBlurs, setIsBlurs] = useState({
    username: false,
    password: false,
    password2: false,
    phone_number: false,
    name: false,
    company_registration_number: false,
    store_name: false,
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

  const idDuplicateCheckMutation = useMutation(postUserIdCheck, {
    onSuccess(data) {
      setIdDuplicateCheck(data.Success);
    },
    onError(err) {
      setErrors({
        ...errors,
        username: err.response.data.FAIL_Message,
      });
      idRef.current.focus();
    },
  });

  const companyRegistrationNumberCheckMutation = useMutation(
    postCompanyRegistrationNumberCheck,
    {
      onSuccess(data) {
        setCompanyNumberCheck(data.Success);
      },
      onError(err) {
        setErrors({
          ...errors,
          company_registration_number: err.response.data.FAIL_Message,
        });
      },
    }
  );

  const buyerSubmitMutation = useMutation(postSignUpBuyer, {
    onSuccess(data) {
      console.log(data);
    },
    onError(err) {
      console.log(err);
    },
  });

  const sellerSubmitMutation = useMutation(postSignUpSeller, {
    onSuccess(data) {
      console.log(data);
    },
    onError(err) {
      console.log(err);
    },
  });

  const isValids = (target, targetName) => {
    if (targetName === "username") {
      return /^[a-z]+[a-zA-Z0-9]{5,19}$/g.test(target);
    } else if (targetName === "password") {
      return /^(?=.*[a-z])(?=.*[0-9]).{8,16}$/g.test(target);
    } else if (targetName === "password2") {
      return target !== password ? false : true;
    } else if (targetName === "phone_number") {
      return /^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/g.test(target);
    } else if (targetName === "name") {
      return target === "" ? false : true;
    } else if (targetName === "company_registration_number") {
      return /^[0-9]{10}$/g.test(target);
    }
  };

  const setUserTypeChange = (type) => {
    dispatch(setType(type));
  };

  const onCheckUserId = () => {
    idDuplicateCheckMutation.mutate({ username });
  };

  const onCheckCompanyNumber = () => {
    companyRegistrationNumberCheckMutation.mutate({
      company_registration_number,
    });
  };

  const onBlurHandler = (event) => {
    setIsBlurs({
      ...isBlurs,
      [event.target.name]: true,
    });

    if (!event.target.value) {
      setErrors({ ...errors, [event.target.name]: "?????? ???????????????." });
    }
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    setIdDuplicateCheck("");
    setCompanyNumberCheck("");
    setValues({
      ...values,
      [name]: value,
    });

    if (!isValids(value, name)) {
      setIsBlurs({
        ...isBlurs,
        [name]: true,
      });
      if (name === "username") {
        setErrors({
          ...errors,
          [name]:
            "6??? ?????? 20??? ????????? ?????? ?????????, ?????????, ????????? ?????? ???????????????.",
        });
      } else if (name === "password") {
        setErrors({
          ...errors,
          [name]: "??????????????? 8??? ??????, ??????????????? ???????????? ?????????.",
        });
      } else if (name === "password2" && value !== password) {
        setErrors({
          ...errors,
          [name]: "??????????????? ???????????? ????????????.",
        });
      } else if (name === "phone_number") {
        setErrors({
          ...errors,
          [name]:
            "?????????????????? 01*?????? ???????????? ?????? 10~11?????? ???????????? ?????????.",
        });
      } else if (
        userType === "SELLER" &&
        name === "company_registration_number"
      ) {
        setErrors({
          ...errors,
          [name]: "???????????????????????? 10????????? ???????????? ???????????????.",
        });
      }
    } else {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
    if (userType === "SELLER") {
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    userType === "BUYER"
      ? buyerSubmitMutation.mutate({
          username,
          password,
          password2,
          phone_number,
          name,
        })
      : sellerSubmitMutation.mutate({
          username,
          password,
          password2,
          phone_number,
          name,
          company_registration_number,
          store_name,
        });
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
          ??????????????????
        </button>
        <button
          type="button"
          onClick={() => {
            setUserTypeChange("SELLER");
          }}
        >
          ??????????????????
        </button>
      </UserTypeTabCard>
      <UserSignUp
        onChange={onChangeHandler}
        formData={values}
        errorsData={errors}
        setTerms={setTerms}
        terms={terms}
        idDuplicateCheck={idDuplicateCheck}
        companyNumberCheck={companyNumberCheck}
        idRef={idRef}
        onSubmit={onSubmitHandler}
        onCompanyCheck={onCheckCompanyNumber}
        onIdCheck={onCheckUserId}
        onBlur={onBlurHandler}
        isBlur={isBlurs}
        userType={userType}
      />
    </>
  );
};

export default SignUpPage;
