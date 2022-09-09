import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsDetail } from "../../../axios-api";
import { DefaultWrapper } from "../../UI/Layout/DefaultWrapper";
import { InnerContainer } from "../../UI/Layout/InnerContainer";
import { ProductDetail } from "./styled";

const ProductsDetail = () => {
  const [productData, setProductData] = useState({});
  const [productAmount, setProductAmount] = useState(1);
  const { id } = useParams();
  const publicUrl = process.env.PUBLIC_URL;

  const getPriceWon = () => {
    if (productData.price) {
      return productData.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return "";
  };

  const requestGetProductDetail = async () => {
    try {
      const response = await getProductsDetail(id);
      setProductData(response);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    requestGetProductDetail();
  }, []);

  return (
    <DefaultWrapper>
      <InnerContainer>
        <ProductDetail>
          <figure>
            <img src={productData.image} alt="상품 이미지" />
            <figcaption>
              <p className="store-name">{productData.seller_store}</p>
              <h2 className="product-name">{productData.product_name}</h2>
              <p className="product-price">
                {getPriceWon()}
                <span>원</span>
              </p>
              <p className="parcel">
                {productData.shipping_method} / {productData.shipping_fee}
              </p>
              <div className="product-amount-btn">
                <button>
                  <img
                    src={`${publicUrl}/assets/icon-minus-line.svg`}
                    alt="개수 빼기 버튼"
                  />
                </button>
                <span>1</span>
                <button>
                  <img
                    src={`${publicUrl}/assets/icon-plus-line.svg`}
                    alt="개수 추가 버튼"
                  />
                </button>
              </div>
              <div className="product-sum">
                <p>총 상품 금액</p>
                <p className="sum-amount">
                  총수량
                  <span>{productAmount}</span>개
                </p>
                <p className="sum-price">
                  {(productData.price * productAmount)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  <span>원</span>
                </p>
              </div>
              <div>
                <button></button>
                <button></button>
              </div>
            </figcaption>
          </figure>
        </ProductDetail>
      </InnerContainer>
    </DefaultWrapper>
  );
};

export default ProductsDetail;
