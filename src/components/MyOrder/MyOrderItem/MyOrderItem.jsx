import React from "react";
import MyOrderItemWrapper from "./styled";
import { useQuery } from "react-query";
import { getProductsDetail } from "../../../lib/api/axios-api";
import Loading from "../../common/Loading/Loading";

const MyOrderItem = (props) => {
  const {
    address,
    address_message,
    created_at,
    delivery_status,
    order_items,
    order_quantity,

    receiver,
    receiver_phone_number,
    total_price,
  } = props.data;
  const { data, isLoading, isError, error } = useQuery(
    ["products", order_items[0]],
    () => getProductsDetail(order_items[0]),
    {
      enabled: !!order_items,
    },
  );

  if (isLoading) return <Loading />;

  return (
    <MyOrderItemWrapper>
      {!isError ? (
        <>
          <img src={data.image} alt='상품 이미지' />
          <div className='text-box'>
            <p className='created-day'>{created_at.split("T")[0]} 결제</p>
            <p className='product-name'>
              {data.product_name} {order_items.length > 1 && `외 ${order_items.length - 1} 개`}
            </p>
            <strong className='total-price'>
              {total_price.toLocaleString("ko-KR")} <span>원</span>
            </strong>
            <p className='address'>주소 : {address}</p>
            <p className='receiver'>수령인 : {receiver}</p>
          </div>
        </>
      ) : (
        <p>삭제된 상품입니다.</p>
      )}
    </MyOrderItemWrapper>
  );
};

export default MyOrderItem;
