import { InnerWrapper } from "../../UI/Layout/InnerWrapper";
import Loading from "../../UI/Loading/Loading";
import { DetailWrapper } from "./styled";

const ProductsDetail = ({ data, isLoading, isError, error }) => {
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
