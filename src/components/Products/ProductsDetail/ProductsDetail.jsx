import { InnerContainer } from "../../UI/Layout/InnerContainer";
import { MediumButton } from "../../UI/Button/Button";
import { ProductDetail } from "./styled";
import MainHeader from "../../MainHeader/MainHeader";

const ProductsDetail = ({
  urlData,
  targetData,
  PriceWon,
  Amount,
  onClickPlus,
  onClickMinus,
}) => {
  return (
    <>
      <MainHeader />
      <InnerContainer>
        {targetData && (
          <ProductDetail>
            <img src={targetData.image} alt="상품 이미지" />
            <div className="product-wrap">
              <div className="product-text-box">
                <p className="store-name">{targetData.seller_store}</p>
                <h2 className="product-name">{targetData.product_name}</h2>
                <p className="product-price">
                  {PriceWon()}
                  <span>원</span>
                </p>
              </div>
              <p className="parcel">
                {targetData.shipping_method} / {targetData.shipping_fee}
              </p>
              <div className="product-amount-btn">
                <button onClick={onClickMinus}>
                  <img
                    src={`${urlData}/assets/icon-minus-line.svg`}
                    alt="개수 빼기 버튼"
                  />
                </button>
                <span>{Amount}</span>
                <button onClick={onClickPlus}>
                  <img
                    src={`${urlData}/assets/icon-plus-line.svg`}
                    alt="개수 추가 버튼"
                  />
                </button>
              </div>
              <div className="product-sum">
                <p>총 상품 금액</p>
                <p className="sum-amount">
                  총수량
                  <span>{Amount}</span>개
                </p>
                <p className="sum-price">
                  {(targetData.price * Amount)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  <span>원</span>
                </p>
              </div>
              <div className="buy-button-box">
                <MediumButton width="416px">바로 구매</MediumButton>
                <MediumButton width="200px" backgroundColor="#767676">
                  장바구니
                </MediumButton>
              </div>
            </div>
          </ProductDetail>
        )}
      </InnerContainer>
    </>
  );
};

export default ProductsDetail;
