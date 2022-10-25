import { SignUpWrapper } from "./styled";
import { Button } from "../../UI/Button/Button";

const UserSignUp = ({ userType, onIdCheck, onSubmit, formData, onChange }) => {
  return (
    <SignUpWrapper>
      <form id="regForm">
        <div className="form-box">
          <div className="input-box">
            <label htmlFor="regUserId">아이디</label>
            <input
              type={"text"}
              id="regUserId"
              name="username"
              onChange={onChange}
            />
            <Button type="button" size="sm" onClick={onIdCheck} width="122px">
              중복확인
            </Button>
          </div>
          <div className="input-box">
            <label htmlFor="regPassword">비밀번호</label>
            <input
              type="password"
              name="password"
              id="regPassword"
              onChange={onChange}
            />
          </div>
          <div className="input-box">
            <label htmlFor="regPasswordConfirm">비밀번호확인</label>
            <input
              type="password"
              id="regPasswordConfirm"
              name="password2"
              onChange={onChange}
            />
          </div>
          <div className="input-box name-box">
            <label htmlFor="name">이름</label>
            <input type="text" id="name" name="name" />
          </div>

          <div className="input-box phone-box">
            <label htmlFor="phoneNumber">휴대폰번호</label>
            <input type="number" id="phoneNumber" name="phone_number" />
          </div>

          {userType === "SELLER" && (
            <>
              <div className="input-box company-box">
                <label htmlFor="companyRegistrationNumber">
                  사업자 등록번호
                </label>
                <input
                  type="number"
                  id="companyRegistrationNumber"
                  name="company_registration_number"
                />
              </div>
              <div className="input-box">
                <label htmlFor="storeName">스토어 이름</label>
                <input type="number" id="storeName" name="store_name" />
              </div>
            </>
          )}
        </div>
        <div className="check-box">
          <input type="checkbox" id="checkPrivacy" />
          <label htmlFor="checkPrivacy">
            호두샵의 <strong>이용약관</strong> 및
            <strong>개인정보처리방침</strong>에 대한 내용을 확인하였고
            동의합니다.
          </label>
        </div>
        <Button type="submit" width="100%" size="medium">
          가입하기
        </Button>
      </form>
    </SignUpWrapper>
  );
};

export default UserSignUp;
