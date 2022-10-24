import { useDispatch, useSelector } from "react-redux";
import UserSignUp from "../components/User/UserSignUp/UserSignUp";
import { setType } from "../store/slice/userSlice";

const SignUpPage = () => {
  const dispatch = useDispatch();
  const userType = useSelector((state) => state.user.type);

  const setUserTypeChange = (type) => {
    dispatch(setType(type));
  };

  const onSubmitHandler = (data) => {
    const { username, phone_number, password, password2 } = data;
  };

  return (
    <UserSignUp
      onTypeChange={setUserTypeChange}
      onSubmit={onSubmitHandler}
      userType={userType}
    />
  );
};

export default SignUpPage;
