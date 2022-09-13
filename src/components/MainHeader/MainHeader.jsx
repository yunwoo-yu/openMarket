import { Link } from "react-router-dom";
import { HeaderWrapper } from "../UI/Layout/HeaderWrapper";
import { InnerHeader } from "./styled";

const MainHeader = () => {
  const publicUrl = process.env.PUBLIC_URL;

  return (
    <HeaderWrapper>
      <InnerHeader>
        <Link to="/">
          <h1>
            <img src={`${publicUrl}/assets/Logo-hodu.png`} alt="로고 이미지" />
          </h1>
        </Link>
        <form>
          <input type="text" placeholder="상품을 검색해보세요!" />
          <button className="search_button">
            <img src={`${publicUrl}/assets/icon-search.svg`} alt="돋보기" />
          </button>
        </form>
        <div className="header_user_button">
          <Link to="/cart">
            <img
              src={`${publicUrl}/assets/icon-shopping-cart.svg`}
              alt="장바구니 아이콘"
            />
            <p>장바구니</p>
          </Link>
          <Link to="/login">
            <img src={`${publicUrl}/assets/icon-user.svg`} alt="유저 아이콘" />
            <p>로그인</p>
          </Link>
        </div>
      </InnerHeader>
    </HeaderWrapper>
  );
};

export default MainHeader;
