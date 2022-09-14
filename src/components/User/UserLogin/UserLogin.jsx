import { Link } from "react-router-dom";
import { MediumButton } from "../../UI/Button/Button";
import { LoginWrapper, SignUpWrapper, UserTypeTabWrapper } from "./styled";

const UserLogin = ({
  onClickType,
  onClickLogin,
  userType,
  onChangeInput,
  formData,
}) => {
  const publicUrl = process.env.PUBLIC_URL;
  const { username, password } = formData;
  return (
    <LoginWrapper>
      <Link to="/">
        <h2>
          <img src={`${publicUrl}/assets/Logo-hodu.png`} alt="로고 이미지" />
        </h2>
      </Link>
      <div className="form-box">
        <UserTypeTabWrapper type={userType}>
          <button onClick={() => onClickType("BUYER")}>구매회원 로그인</button>
          <button onClick={() => onClickType("SELLER")}>판매회원 로그인</button>
        </UserTypeTabWrapper>
        <form className="login-form">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="아이디"
            value={username}
            onChange={onChangeInput}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="비밀번호"
            onChange={onChangeInput}
            value={password}
          />
          <MediumButton onClick={onClickLogin}>로그인</MediumButton>
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
