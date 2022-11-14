import { useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { postcodeScriptUrl } from "react-daum-postcode/lib/loadPostcode";
import { useLocation } from "react-router-dom";
import OrderForm from "../../components/Order/OrderForm/OrderForm";
import OrderHeader from "../../components/Order/OrderHeader/OrderHeader";
import OrderList from "../../components/Order/OrderList/OrderList";
import OrderPayment from "../../components/Order/OrderPayment/OrderPayment";
import OrderTotalPrice from "../../components/Order/OrderTotalPrice/OrderTotalPrice";
import { OrderWrapper } from "./styled";

const OrderPage = () => {
  const location = useLocation();
  const data = location.state.data;
  const postPopUp = useDaumPostcodePopup(postcodeScriptUrl);
  const [inputValue, setInputValue] = useState({
    reciever: "",
    reciever_phone_number: "",
    reciever_phone_number2: "",
    reciever_phone_number3: "",
    address: "",
    address2: "",
    address3: "",
    address_message: "",
    payment_method: "",
    total_price: 0,
  });

  const handleComplete = (data) => {
    const { zonecode, address } = data;

    setInputValue({
      ...inputValue,
      address: zonecode,
      address2: address,
    });
  };

  const onChangeHandler = (e) => {
    const { value, name } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  console.log(inputValue);

  const handleClick = () => {
    postPopUp({ onComplete: handleComplete });
  };

  return (
    <OrderWrapper>
      <h2>주문/결제하기</h2>
      <OrderHeader />
      <OrderList data={data} />
      <OrderTotalPrice data={data} />
      <OrderForm
        onPostCode={handleClick}
        formValue={inputValue}
        onChange={onChangeHandler}
      />
      <OrderPayment data={data} />
    </OrderWrapper>
  );
};

export default OrderPage;
