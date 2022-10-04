import Logo from "../../assets/Logo-hodu.png";
import Search from "../../assets/icon-search.svg";
import User from "../../assets/icon-user.svg";
import Cart from "../../assets/icon-shopping-cart.svg";
import Cart2 from "../../assets/icon-shopping-cart-2.svg";
import { Link } from "react-router-dom";
import { HeaderWrapper, InnerHeader } from "./styled";

const MainHeader = ({ ConfirmLogin }) => {
  const nowUrl = window.location.pathname;

  const getImgaePath = () => {
    if (nowUrl === "/cart") return Cart2;
    else return Cart;
  };

  return (
    <HeaderWrapper>
      <InnerHeader>
        <Link to="/">
          <h1>
            <img src={Logo} alt="로고 이미지" />
          </h1>
        </Link>
        <form>
          <input type="text" placeholder="상품을 검색해보세요!" />
          <button className="search_button">
            <img src={Search} alt="돋보기" />
          </button>
        </form>
        <div className="header_user_button">
          <Link to="/cart" className={nowUrl === "/cart" ? "active" : ""}>
            <img src={getImgaePath()} alt="장바구니 아이콘" />
            <p>장바구니</p>
          </Link>
          {ConfirmLogin ? (
            <div className="mypage-btn">
              <img src={User} alt="유저 아이콘" />
              <p>마이페이지</p>
            </div>
          ) : (
            <Link to="/login">
              <img src={User} alt="유저 아이콘" />
              <p>로그인</p>
            </Link>
          )}
        </div>
      </InnerHeader>
    </HeaderWrapper>
  );
};

export default MainHeader;
