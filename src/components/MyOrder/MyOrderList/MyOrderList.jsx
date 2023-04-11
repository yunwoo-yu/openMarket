import React from "react";
import MyOrderListWrapper from "./styled";
import MyOrderItem from "../MyOrderItem/MyOrderItem";

const MyOrderList = (props) => {
  const { data } = props;

  return (
    <MyOrderListWrapper>
      {data.map((item) => (
        <MyOrderItem data={item} key={item.order_number} />
      ))}
    </MyOrderListWrapper>
  );
};

export default MyOrderList;
