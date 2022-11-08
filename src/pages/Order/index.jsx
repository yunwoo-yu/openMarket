import { useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { postcodeScriptUrl } from "react-daum-postcode/lib/loadPostcode";
import { useLocation } from "react-router-dom";
import OrderForm from "../../components/Order/OrderForm/OrderForm";
import OrderHeader from "../../components/Order/OrderHeader/OrderHeader";
import OrderList from "../../components/Order/OrderList/OrderList";
import OrderTotalPrice from "../../components/Order/OrderTotalPrice/OrderTotalPrice";
import { OrderWrapper } from "./styled";

const OrderPage = () => {
  const location = useLocation();
  const data = location.state.data;
  const postPopUp = useDaumPostcodePopup(postcodeScriptUrl);
  const [addressData, setAddressData] = useState({ zonecode: "", address: "" });

  const handleComplete = (data) => {
    const { zonecode, address } = data;
    const addressData = {
      zonecode,
      address,
    };

    setAddressData(addressData);
  };

  const handleClick = () => {
    postPopUp({ onComplete: handleComplete });
  };

  return (
    <OrderWrapper>
      <h2>주문/결제하기</h2>
      <OrderHeader />
      <OrderList data={data} />
      <OrderTotalPrice data={data} />
      <OrderForm onPostCode={handleClick} addressData={addressData} />
    </OrderWrapper>
  );
};

export default OrderPage;
