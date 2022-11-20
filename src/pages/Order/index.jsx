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
  const location = useLocation();
  const data = location.state.data;
  const postPopUp = useDaumPostcodePopup(postcodeScriptUrl);
  const [isPaymentCheckBox, setIsPaymentCheckBox] = useState(true);
  const [inputValue, setInputValue] = useState({
    product_id: 0,
    quantity: 0,
    order_kind: "",
    receiver: "",
    receiver_phone_number: "",
    address: "",
    address2: "",
    address3: "",
    address_message: "",
    payment_method: "",
    total_price: 0,
  });
  const [errors, setErrors] = useState({
    receiver: "",
    receiver_phone_number: "",
    address: "",
    address2: "",
    address3: "",
    address_message: "",
    payment_method: "",
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
        quantity: data[0].quantity,
      });
    }
  }, []);

  const directOrderMutation = useMutation(postProductOrder, {
    onSuccess(data) {
      console.log(data);
    },
    onError(err) {
      for (const [key, value] of Object.entries(err.response.data)) {
        if (value) {
          setErrors((prev) => {
            return { ...prev, [key]: value.join("") };
          });
        }
      }
    },
  });

  const handleComplete = (data) => {
    const { zonecode, address } = data;

    setInputValue({
      ...inputValue,
      address: zonecode,
      address2: address,
    });
    if (errors.address) {
      setErrors({ ...errors, address: "" });
    }
  };

  const onChangeHandler = (e) => {
    const { value, name } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
    if (value) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
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

  const onClickSubmitHandler = (e) => {
    e.preventDefault();

    directOrderMutation.mutate({
      ...inputValue,
      address: inputValue.address + inputValue.address2 + inputValue.address3,
    });
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
        errors={errors}
      />
      <OrderPayment
        data={data}
        onClick={onClickPaymentMethod}
        onSubmit={onClickSubmitHandler}
        setIsCheckBox={setIsPaymentCheckBox}
        isCheckBox={isPaymentCheckBox}
        errors={errors}
      />
    </OrderWrapper>
  );
};

export default OrderPage;
