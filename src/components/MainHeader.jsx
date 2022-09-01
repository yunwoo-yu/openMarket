import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  height: 90px;

  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  .header_wrap {
    max-width: 1280px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 0 auto;

    > h1 {
      max-width: 124px;
      height: 38px;
      > img {
        width: 100%;
      }
    }

    > form {
      width: 400px;
      height: 46px;
      position: relative;

      margin-left: 30px;
      > input {
        width: 100%;
        padding: 13px 0 13px 22px;
      }
      > .search_button {
        width: 28px;
        height: 28px;
        padding: 1% 1.5% 1.5% 1%;
        border: none;
        background: none;
        position: absolute;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 50%;
        transform: translateY(-50%);
        right: 22px;
        cursor: pointer;

        > div {
          width: 18.67px;
          height: 18.67px;
          border: 3px solid #21bf48;
          border-radius: 50%;
        }
      }
    }
  }
`;

const MainHeader = () => {
  const publicUrl = process.env.PUBLIC_URL;

  return (
    <Header>
      <div className="header_wrap">
        <h1>
          <img src={`${publicUrl}/assets/Logo-hodu.png`} alt="로고 이미지" />
        </h1>
        <form>
          <input type="text" placeholder="상품을 검색해보세요!" />
          <button className="search_button">
            <div>
              <span></span>
            </div>
          </button>
        </form>
        <article>
          <figure></figure>
        </article>
      </div>
    </Header>
  );
};

export default MainHeader;
