import { Link } from "react-router-dom";
import { Button } from "../../UI/Button/Button";
import { LoginWrapper, SignUpWrapper } from "./styled";
import { UserTypeTabCard } from "../../UI/UserTypeTabCard/UserTypeTabCard";
import Logo from "../../UI/Logo/Logo";

const UserLogin = ({
  userType,
  onChange,
  onSubmit,
  formData,
  errorMessage,
  onTypeChange,
  idRef,
  passwordRef,
}) => {
  const { username, password } = formData;

  return (
    <LoginWrapper>
      <h2 className="hidden">로그인 폼</h2>
      <Logo />
      <div className="form-box">
        <UserTypeTabCard type={userType}>
          <button
            type="button"
            onClick={() => {
              onTypeChange("BUYER");
            }}
          >
            구매회원 로그인
          </button>
          <button
            type="button"
            onClick={() => {
              onTypeChange("SELLER");
            }}
          >
            판매회원 로그인
          </button>
        </UserTypeTabCard>
        <form className="login-form">
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            placeholder="아이디"
            onChange={onChange}
            ref={idRef}
            autoFocus
          />
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            placeholder="비밀번호"
            ref={passwordRef}
            onChange={onChange}
          />
          <p>{errorMessage}</p>
          <Button type="submit" onClick={onSubmit} size="medium" width="480px">
            로그인
          </Button>
        </form>
      </div>
      <SignUpWrapper>
        <Link to="/signup">회원가입</Link>
        <Link to="reg">비밀번호 찾기</Link>
      </SignUpWrapper>
    </LoginWrapper>
  );
};

export default UserLogin;
