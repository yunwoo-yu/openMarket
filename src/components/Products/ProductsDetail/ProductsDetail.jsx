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
            <div>
              <p>{data.store_name}</p>
              <p>{data.product_name}</p>
              <p>{data.price}</p>
              <p>
                {data.shipping_method} / {data.shipping_fee}
              </p>
              <div className="quantitu-box">
                <button onClick={onClickMinus}>
                  <img src={Minus} alt="" />
                </button>
                <span>{count}</span>
                <button onClick={onClickPlus}>
                  <img src={Plus} alt="" />
                </button>
              </div>
            </div>
          </div>
        </InnerWrapper>
      </DetailWrapper>
    </>
  );
};

export default ProductsDetail;
