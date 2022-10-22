import { UserTypeTabCard } from "../../UI/UserTypeTabCard/UserTypeTabCard";
import { SignUpWrapper } from "./styled";
import Logo from "../../UI/Logo/Logo";

const UserSignUp = () => {
  return (
    <SignUpWrapper>
      <Logo />
      <UserTypeTabCard>
        <button>구매회원가입</button>
        <button>판매회원가입</button>
      </UserTypeTabCard>
    </SignUpWrapper>
  );
};

export default UserSignUp;
