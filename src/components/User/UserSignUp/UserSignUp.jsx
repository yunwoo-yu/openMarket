import { UserTypeTabCard } from "../../UI/UserTypeTabCard/UserTypeTabCard";
import { SignUpWrapper } from "./styled";
import Logo from "../../UI/Logo/Logo";
import { useForm } from "react-hook-form";
import { Button } from "../../UI/Button/Button";

const UserSignUp = ({ onTypeChange, onSubmit, userType }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: "all" });
  console.log(isDirty);
  return (
    <SignUpWrapper>
      <Logo />
      <UserTypeTabCard type={userType}>
        <button
          type="button"
          onClick={() => {
            onTypeChange("BUYER");
          }}
        >
          구매회원가입
        </button>
        <button
          type="button"
          onClick={() => {
            onTypeChange("SELLER");
          }}
        >
          판매회원가입
        </button>
      </UserTypeTabCard>
      <form id="regForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-box">
          <div className="input-box">
            <label htmlFor="regUserId">아이디</label>
            <input
              id="regUserId"
              className={errors.username && "error-active"}
              {...register("username", {
                required: { value: true, message: "필수 정보입니다." },
                pattern: {
                  value: /^[a-zA-Z0-9]{6,20}$/g,
                  message:
                    "6자 이상 20자 이내 영문 소문자, 대문자, 숫자만 사용 가능합니다.",
                },
              })}
            />
            <button className="check-btn">중복확인</button>
          </div>
          {
            errors.username && (
              <p className="error-message">{errors.username.message}</p>
            )

            // <p className="success-message">멋진 아이디네요&#58;&#41;</p>
          }
          <div className="input-box">
            <label htmlFor="regPassword">비밀번호</label>
            <input
              type="password"
              id="regPassword"
              className={errors.password && "error-active"}
              {...register("password", {
                required: { value: true, message: "필수 정보입니다." },
              })}
            />
          </div>
          {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}
          <div className="input-box">
            <label htmlFor="regPasswordConfirm">비밀번호확인</label>
            <input
              type="password"
              id="regPasswordConfirm"
              className={errors.password2 && "error-active"}
              {...register("password2", {
                required: { value: true, message: "필수 정보입니다." },
              })}
            />
          </div>
          {errors.password2 && (
            <p className="error-message">{errors.password2.message}</p>
          )}
          <div className="input-box name-box">
            <label htmlFor="name">이름</label>
            <input
              type="text"
              id="name"
              className={errors.name && "error-active"}
              {...register("name", {
                required: { value: true, message: "필수 정보입니다." },
              })}
            />
          </div>
          {errors.name && (
            <p className="error-message">{errors.name.message}</p>
          )}
          <div className="input-box phone-box">
            <label htmlFor="regPasswordConfirm">휴대폰번호</label>
            <input
              type="text"
              className="phone-number"
              {...register("phone_number", {
                required: { value: true, message: "필수 정보입니다." },
                maxLength: {
                  value: 11,
                  message: "-을 제외한 10 ~ 11자리 숫자로 작성 해주세요.",
                },
                minLength: {
                  value: 10,
                  message: "-을 제외한 10 ~ 11자리 숫자로 작성 해주세요.",
                },
                pattern: {
                  value: /^[0-9]{10,11}$/g,
                  message: "-을 제외한 10 ~ 11자리 숫자로 작성 해주세요.",
                },
              })}
            />
          </div>
          {errors.phone_number && (
            <p className="error-message">{errors.phone_number.message}</p>
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
        <Button
          disabled={!isDirty || !isValid}
          type="submit"
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
