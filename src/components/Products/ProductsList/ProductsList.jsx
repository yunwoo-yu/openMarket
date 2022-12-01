import React from "react";
import { DefaultWrapper } from "../../common/Wrapper/DefaultWrapper";
import { InnerWrapper } from "../../common/Wrapper/InnerWrapper";
import ProductsItem from "../ProductsItem/ProductsItem";
import { ProductsWrap } from "./styled";

const ProductsList = ({ data }) => {
  return (
    <DefaultWrapper>
      <h2 className="hidden">상품리스트</h2>
      <InnerWrapper>
        <ProductsWrap>
          {data.pages.map((page, i) => (
            <React.Fragment key={i}>
              {page.results.map((item) => (
                <ProductsItem data={item} key={item.product_id} />
              ))}
            </React.Fragment>
          ))}
        </ProductsWrap>
      </InnerWrapper>
    </DefaultWrapper>
  );
};
export default ProductsList;
