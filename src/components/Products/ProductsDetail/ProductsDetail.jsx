import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsDetail } from "../../../axios-api";
import { DefaultWrapper } from "../../UI/Layout/DefaultWrapper";
import { InnerContainer } from "../../UI/Layout/InnerContainer";
import { ProductDetail } from "./styled";

const ProductsDetail = () => {
  const [productData, setProductData] = useState();
  const { id } = useParams();
  const priceWon = productData.price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const requestGetProductDetail = async () => {
    try {
      const response = await getProductsDetail(id);
      setProductData(response);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(productData);

  useEffect(() => {
    requestGetProductDetail();
  }, []);

  return (
    <DefaultWrapper>
      <InnerContainer>
        {productData && (
          <ProductDetail>
            <figure>
              <img src={productData.image} alt="상품 이미지" />
              <figcaption>
                <p>{productData.seller_store}</p>
                <h2>{productData.product_name}</h2>
                <p>{priceWon}</p>
                <p>
                  {productData.shipping_method} / {productData.shipping_fee}
                </p>
                <button>-</button>
                <span></span>
                <button>+</button>
                <p>총 상품 금액</p>
                <p></p>
                <p></p>
              </figcaption>
            </figure>
          </ProductDetail>
        )}
      </InnerContainer>
    </DefaultWrapper>
  );
};

export default ProductsDetail;
