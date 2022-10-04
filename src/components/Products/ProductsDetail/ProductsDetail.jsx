import { InnerWrapper } from "../../UI/Layout/InnerWrapper";
import Loading from "../../UI/Loading/Loading";
import { DetailWrapper } from "./styled";
import Plus from "../../../assets/icon-plus-line.svg";
import Minus from "../../../assets/icon-minus-line.svg";

const ProductsDetail = ({
  data,
  isLoading,
  isError,
  error,
  count,
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
  return (
    <>
      <DetailWrapper>
        <h2 className="hidden">상품 디테일 페이지</h2>
        <InnerWrapper>
          <div className="product-data">
            <img src={data.image} alt="상품 이미지" />
            <div className="detail-text-box">
              <p>{data.store_name}</p>
              <p>{data.product_name}</p>
              <p>
                <strong>{data.price}</strong>원
              </p>
              <p>
                {data.shipping_method} / {data.shipping_fee}
              </p>
              <div className="quantity-box">
                <button onClick={onClickMinus}>
                  <img src={Minus} alt="수량 감소" />
                </button>
                <span>{count}</span>
                <button onClick={onClickPlus}>
                  <img src={Plus} alt="수량 증가" />
                </button>
              </div>
              <div className="sum-box">
                <p className="sum-price-text">총 상품 금액</p>
                <p className="sum-quantity">
                  총 수량<strong>{count}</strong>개
                </p>
                <p className="sum-price">
                  <strong>{count * data.price}</strong>원
                </p>
              </div>
            </div>
          </div>
        </InnerWrapper>
      </DetailWrapper>
    </>
  );
};

export default ProductsDetail;
