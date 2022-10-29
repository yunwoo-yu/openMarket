import { SignUpWrapper } from "./styled";
import { Button } from "../../common/Button/Button";

const UserSignUp = ({
  userType,
  errorsData,
  formData,
  terms,
  idDuplicateCheck,
  companyNumberCheck,
  onCompanyCheck,
  idRef,
  setTerms,
  isBlur,
  onIdCheck,
  onSubmit,
  onChange,
  onBlur,
}) => {
  return (
    <SignUpWrapper>
      <form id="regForm" onSubmit={onSubmit}>
        <div className="form-box">
          <div className="input-box">
            <label htmlFor="regUserId">아이디</label>
            <input
              type={"text"}
              id="regUserId"
              name="username"
              className={`${
                isBlur.username && errorsData.username ? "error-active" : ""
              }`}
              onChange={onChange}
              onBlur={onBlur}
              ref={idRef}
            />
            <Button
              type="button"
              size="sm"
              disabled={!isBlur.username || errorsData.username}
              onClick={onIdCheck}
              width="122px"
            >
              중복확인
            </Button>
          </div>
          {isBlur.username && !idDuplicateCheck && (
            <p className={`errors-message`}>{errorsData.username}</p>
          )}
          {isBlur.username && !errorsData.username && (
            <p className="success">{idDuplicateCheck}</p>
          )}
          <div className="input-box">
            <label htmlFor="regPassword">비밀번호</label>
            <input
              type="password"
              name="password"
              id="regPassword"
              className={`${
                isBlur.password && errorsData.password ? "error-active" : ""
              } ${isBlur.password && !errorsData.password ? "check" : ""}`}
              onChange={onChange}
              onBlur={onBlur}
            />
          </div>
          {isBlur.password && (
            <p className={`errors-message`}>{errorsData.password}</p>
          )}
          <div className="input-box">
            <label htmlFor="regPasswordConfirm">비밀번호확인</label>
            <input
              type="password"
              id="regPasswordConfirm"
              name="password2"
              className={`${
                isBlur.password2 && errorsData.password2 ? "error-active" : ""
              } ${isBlur.password2 && !errorsData.password2 ? "check" : ""}`}
              onChange={onChange}
              onBlur={onBlur}
            />
          </div>
          {isBlur.password2 && (
            <p className={`errors-message`}>{errorsData.password2}</p>
          )}
          <div className="input-box name-box">
            <label htmlFor="name">이름</label>
            <input
              type="text"
              id="name"
              name="name"
              className={`${
                isBlur.name && errorsData.name ? "error-active" : ""
              }`}
              onChange={onChange}
              onBlur={onBlur}
            />
          </div>
          {isBlur.name && <p className={`errors-message`}>{errorsData.name}</p>}
          <div className="input-box phone-box">
            <label htmlFor="phoneNumber">휴대폰번호</label>
            <input
              type="number"
              id="phoneNumber"
              name="phone_number"
              className={`${
                isBlur.phone_number && errorsData.phone_number
                  ? "error-active"
                  : ""
              }`}
              onChange={onChange}
              onBlur={onBlur}
            />
          </div>
          {isBlur.phone_number && (
            <p className={`errors-message`}>{errorsData.phone_number}</p>
          )}
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
                  className={`${
                    isBlur.company_registration_number &&
                    errorsData.company_registration_number
                      ? "error-active"
                      : ""
                  }`}
                  onChange={onChange}
                  onBlur={onBlur}
                />
                <Button
                  type="button"
                  size="sm"
                  onClick={onCompanyCheck}
                  disabled={
                    !isBlur.company_registration_number ||
                    errorsData.company_registration_number
                  }
                  width="122px"
                >
                  인증
                </Button>
              </div>
              {isBlur.company_registration_number && !companyNumberCheck && (
                <p className={`errors-message`}>
                  {errorsData.company_registration_number}
                </p>
              )}
              {isBlur.company_registration_number &&
                !errorsData.company_registration_number && (
                  <p className="success">{companyNumberCheck}</p>
                )}
              <div className="input-box">
                <label htmlFor="storeName">스토어 이름</label>
                <input
                  type="text"
                  id="storeName"
                  name="store_name"
                  className={`${
                    isBlur.store_name && errorsData.store_name
                      ? "error-active"
                      : ""
                  }`}
                  onChange={onChange}
                  onBlur={onBlur}
                />
              </div>
              {isBlur.store_name && (
                <p className={`errors-message`}>{errorsData.store_name}</p>
              )}
            </>
          )}
        </div>
        <div className="check-box">
          <input
            type="checkbox"
            id="checkPrivacy"
            onClick={() => {
              setTerms((prev) => !prev);
            }}
            required
          />
          <label htmlFor="checkPrivacy">
            호두샵의 <strong>이용약관</strong> 및
            <strong>개인정보처리방침</strong>에 대한 내용을 확인하였고
            동의합니다.
          </label>
        </div>
        <Button
          type="submit"
          disabled={
            !formData.username ||
            !formData.password ||
            !formData.password2 ||
            !formData.name ||
            !formData.phone_number ||
            !terms ||
            errorsData.username ||
            errorsData.password ||
            errorsData.password2 ||
            errorsData.name ||
            errorsData.phone_number
          }
          width="100%"
          size="medium"
        >
          가입하기
        </Button>
      </form>
    </SignUpWrapper>
  );
};

export default UserSignUp;
