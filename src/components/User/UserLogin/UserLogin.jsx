import Logo from "../../../assets/Logo-hodu.png";
import { Link } from "react-router-dom";
import { Button } from "../../UI/Button/Button";
import { LoginWrapper, SignUpWrapper, UserTypeTabWrapper } from "./styled";

const UserLogin = ({ onClickType, setUserType }) => {
  return (
    <LoginWrapper>
      <Link to="/">
        <h2>
          <img src={Logo} alt="로고" />
        </h2>
      </Link>
      <div className="form-box">
        <UserTypeTabWrapper type={setUserType}>
          <button
            type="button"
            onClick={() => {
              onClickType("BUYER");
            }}
          >
            구매회원 로그인
          </button>
          <button
            type="button"
            onClick={() => {
              onClickType("SELLER");
            }}
          >
            판매회원 로그인
          </button>
        </UserTypeTabWrapper>
        <form className="login-form">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="아이디"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="비밀번호"
          />
          <Button size="medium" width="480px">
            로그인
          </Button>
        </form>
      </div>
      <SignUpWrapper>
        <Link to="reg">회원가입</Link>
        <Link to="reg">비밀번호 찾기</Link>
      </SignUpWrapper>
    </LoginWrapper>
  );
};

export default UserLogin;
