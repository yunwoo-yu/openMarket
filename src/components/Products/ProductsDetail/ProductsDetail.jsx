import { InnerWrapper } from "../../common/Wrapper/InnerWrapper";
import { DetailWrapper } from "./styled";
import { Button } from "../../common/Button/Button";
import QuantityButton from "../../common/QuantityButton/QuantityButton";

const ProductsDetail = ({
  data,
  amount,
  convertedSum,
  convetedPrice,
  onClickQuantity,
  onClickCartItem,
  onClickProductOrder,
}) => {
  return (
    <>
      <DetailWrapper>
        <h2 className="hidden">상품 디테일 페이지</h2>
        <InnerWrapper>
          <div className="product-data">
            <img src={data.image} alt="상품 이미지" />
            <div className="detail-text-box">
              <p className="store-name">{data.store_name}</p>
              <p className="product-name">{data.product_name}</p>
              <p className="product-price">
                <strong>{convetedPrice}</strong>원
              </p>
              <p className="delivery">
                {data.shipping_method} / {data.shipping_fee}
              </p>
              <QuantityButton
                num={amount}
                maxNum={data.stock}
                onClickMinus={() => {
                  onClickQuantity("decrement");
                }}
                onClickPlus={() => {
                  onClickQuantity("increment");
                }}
              />
              <div className="sum-box">
                <p className="sum-price-text">총 상품 금액</p>
                <p className="sum-quantity">
                  총 수량 <strong>{amount}</strong>개
                </p>
                <p className="sum-price">
                  <strong>{convertedSum}</strong>원
                </p>
              </div>
              <div className="btn-box">
                <Button
                  width="416px"
                  size="medium"
                  onClick={onClickProductOrder}
                >
                  바로 구매
                </Button>
                <Button
                  className="cart-in-btn"
                  onClick={onClickCartItem}
                  width="200px"
                  size="medium"
                  backColor="#767676"
                >
                  장바구니
                </Button>
              </div>
            </div>
          </div>
        </InnerWrapper>
      </DetailWrapper>
    </>
  );
};

export default ProductsDetail;
