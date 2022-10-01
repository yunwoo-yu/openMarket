import { InnerWrapper } from "../../UI/Layout/InnerWrapper";
import { DetailWrapper } from "./styled";

const ProductsDetail = ({ data, isLoading, isError, error }) => {
  if (isLoading) return <h2>로딩중!!!!!</h2>;
  if (isError)
    return (
      <>
        <p>{error.response.data.detail}</p>
      </>
    );
  return (
    <>
      <DetailWrapper>
        <InnerWrapper>
          <h2 className="hidden">상품 디테일 페이지</h2>
          <div>
            <img src={data.image} alt="상품 이미지" />
            <div></div>
          </div>
        </InnerWrapper>
      </DetailWrapper>
    </>
  );
};

export default ProductsDetail;
