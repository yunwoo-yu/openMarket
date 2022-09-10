import { DefaultWrapper } from "../../UI/Layout/DefaultWrapper";
import { InnerContainer } from "../../UI/Layout/InnerContainer";
import { MediumButton } from "../../UI/Button/MediumButton/MediumButton";
import { ProductDetail } from "./styled";

const ProductsDetail = ({
  onURL,
  onData,
  onPrice,
  onAmount,
  onPlus,
  onMinus,
}) => {
  return (
    <DefaultWrapper>
      <InnerContainer>
        <ProductDetail>
          <figure>
            <img src={onData.image} alt="상품 이미지" />
            <figcaption>
              <p className="store-name">{onData.seller_store}</p>
              <h2 className="product-name">{onData.product_name}</h2>
              <p className="product-price">
                {onPrice()}
                <span>원</span>
              </p>
              <p className="parcel">
                {onData.shipping_method} / {onData.shipping_fee}
              </p>
              <div className="product-amount-btn">
                <button onClick={onMinus}>
                  <img
                    src={`${onURL}/assets/icon-minus-line.svg`}
                    alt="개수 빼기 버튼"
                  />
                </button>
                <span>{onAmount}</span>
                <button onClick={onPlus}>
                  <img
                    src={`${onURL}/assets/icon-plus-line.svg`}
                    alt="개수 추가 버튼"
                  />
                </button>
              </div>
              <div className="product-sum">
                <p>총 상품 금액</p>
                <p className="sum-amount">
                  총수량
                  <span>{onAmount}</span>개
                </p>
                <p className="sum-price">
                  {(onData.price * onAmount)
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
            </figcaption>
          </figure>
        </ProductDetail>
      </InnerContainer>
    </DefaultWrapper>
  );
};

export default ProductsDetail;
