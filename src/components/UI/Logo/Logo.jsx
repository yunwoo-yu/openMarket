import { Link, useLocation } from "react-router-dom";
import LogoImg from "../../../assets/Logo-hodu.png";
import { LogoWrapper } from "./styled";

const Logo = () => {
  const pathname = useLocation().pathname;

  return (
    <>
      {pathname === "/signup" ? (
        <LogoWrapper margin="70px auto 70px">
          <Link to="/">
            <img src={LogoImg} alt="로고" />
          </Link>
        </LogoWrapper>
      ) : (
        <LogoWrapper>
          <Link to="/">
            <img src={LogoImg} alt="로고" />
          </Link>
        </LogoWrapper>
      )}
    </>
  );
};

export default Logo;
