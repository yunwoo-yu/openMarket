import Logo from "../../assets/Logo-hodu.png";
import Search from "../../assets/icon-search.svg";
import User from "../../assets/icon-user.svg";
import User2 from "../../assets/icon-user-2.svg";
import Cart from "../../assets/icon-shopping-cart.svg";
import Cart2 from "../../assets/icon-shopping-cart-2.svg";
import { Link, NavLink } from "react-router-dom";
import { HeaderWrapper, InnerHeader } from "./styled";

const MainHeader = ({
  token,
  pathName,
  onUserToggleMenu,
  userMenu,
  onLogOut,
}) => {
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
          <NavLink to="/cart">
            <img
              src={pathName !== "/cart" ? Cart : Cart2}
              alt="장바구니 아이콘"
            />
            <p>장바구니</p>
          </NavLink>
          {token ? (
            <div className="mypage-btn" onClick={onUserToggleMenu}>
              <img src={userMenu ? User2 : User} alt="유저 아이콘" />
              <p className={userMenu ? "active" : ""}>마이페이지</p>
            </div>
          ) : (
            <Link to="/login">
              <img src={User} alt="유저 아이콘" />
              <p>로그인</p>
            </Link>
          )}
          {userMenu && (
            <ul className="user-menu">
              <li>
                <Link to="/mypage">마이페이지</Link>
              </li>
              <li onClick={onLogOut}>로그아웃</li>
            </ul>
          )}
        </div>
      </InnerHeader>
    </HeaderWrapper>
  );
};

export default MainHeader;
