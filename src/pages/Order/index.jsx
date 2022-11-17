import { useEffect } from "react";
import { useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { postcodeScriptUrl } from "react-daum-postcode/lib/loadPostcode";
import { useMutation } from "react-query";
import { useLocation } from "react-router-dom";
import OrderForm from "../../components/Order/OrderForm/OrderForm";
import OrderHeader from "../../components/Order/OrderHeader/OrderHeader";
import OrderList from "../../components/Order/OrderList/OrderList";
import OrderPayment from "../../components/Order/OrderPayment/OrderPayment";
import OrderTotalPrice from "../../components/Order/OrderTotalPrice/OrderTotalPrice";
import { postProductOrder } from "../../lib/api/axios-api";
import { OrderWrapper } from "./styled";

const OrderPage = () => {
  const initialState = {
    product_id: 0,
    quantity: 0,
    order_kind: "",
    reciever: "",
    reciever_phone_number: "",
    address: "",
    address2: "",
    address3: "",
    address_message: "",
    payment_method: "",
    total_price: 0,
  };
  const location = useLocation();
  const data = location.state.data;
  const postPopUp = useDaumPostcodePopup(postcodeScriptUrl);
  const [isPaymentCheckBox, setIsPaymentCheckBox] = useState(true);
  const [inputValue, setInputValue] = useState({ ...initialState });
  const [errors, setErrors] = useState({
    reciever: "",
    reciever_phone_number: "",
    address: "",
    address2: "",
    address3: "",
    address_message: "",
    payment_method: "",
  });

  const [isBlurs, setIsBlurs] = useState({
    reciever: false,
    reciever_phone_number: false,
    address: false,
    address2: false,
    address3: false,
    address_message: false,
    payment_method: false,
  });

  useEffect(() => {
    if (
      data[0].order_kind === "direct_order" ||
      data[0].order_kind === "cart_one_order"
    ) {
      setInputValue({
        ...inputValue,
        order_kind: data[0].order_kind,
        product_id: data[0].product_id,
        total_price: data[0].price * data[0].quantity + data[0].shipping_fee,
      });
    }
  }, []);

  // const isValids = (target, targetName) => {
  //   if (targetName === "reciever_phone_number") {
  //     return /^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/g.test(target);
  //   }
  // };

  const directOrderMutation = useMutation(postProductOrder, {
    onSuccess(data) {
      console.log(data);
    },
    onError(err) {
      console.log(err);
    },
  });

  const onBlurHandler = (event) => {
    setIsBlurs({
      ...isBlurs,
      [event.target.name]: true,
    });

    if (!event.target.value) {
      setErrors({ ...errors, [event.target.name]: "필수 정보입니다." });
    }
  };

  const onClickSubmitHandler = (e) => {
    e.preventDefault();
    directOrderMutation.mutate({ inputValue });
  };

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

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const onClickPaymentMethod = (e) => {
    const { id, name } = e.target;
    setInputValue({
      ...inputValue,
      [name]: id,
    });
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
      <OrderForm
        onPostCode={handleClick}
        formValue={inputValue}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        errors={errors}
        isBlur={isBlurs}
      />
      <OrderPayment
        data={data}
        onClick={onClickPaymentMethod}
        onSubmit={onClickSubmitHandler}
        onBlur={onBlurHandler}
        setIsCheckBox={setIsPaymentCheckBox}
        isCheckBox={isPaymentCheckBox}
      />
    </OrderWrapper>
  );
};

export default OrderPage;
