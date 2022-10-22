import { InnerWrapper } from "../../UI/Wrapper/InnerWrapper";
import Loading from "../../UI/Loading/Loading";
import { DetailWrapper } from "./styled";
import Plus from "../../../assets/icon-plus-line.svg";
import Minus from "../../../assets/icon-minus-line.svg";
import { Button } from "../../UI/Button/Button";

const ProductsDetail = ({
  data,
  isLoading,
  isError,
  error,
  amount,
  onClickPlus,
  onClickMinus,
}) => {
  if (isLoading) return <Loading />;
  if (isError)
    return (
      <>
        <p>{error.response.data.detail}</p>
      </>
    );
  const convetedPrice = data.price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const convertedSum = (data.price * amount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

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
              <div className="quantity-box">
                <button onClick={onClickMinus}>
                  <img src={Minus} alt="수량 감소" />
                </button>
                <span>{amount}</span>
                <button onClick={onClickPlus}>
                  <img src={Plus} alt="수량 증가" />
                </button>
              </div>
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
                <Button width="416px" size="medium">
                  바로 구매
                </Button>
                <Button width="200px" size="medium" backColor="#767676">
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
