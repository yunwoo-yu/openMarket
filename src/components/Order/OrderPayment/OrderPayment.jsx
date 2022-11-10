import { PaymentTextWrapper } from "../../common/Input/InputWrapper/PaymentTextWrapper";
import { OrderPaymentWrapper } from "./styled";

const OrderPayment = () => {
  return (
    <OrderPaymentWrapper>
      <p className="payment-title">결제수단</p>
      <PaymentTextWrapper>
        <input type={"radio"} name="card" id="card" />
        <label htmlFor="card">신용/체크카드</label>
        <input type={"radio"} name="card" id="card" />
        <label htmlFor="card">무통장 입금</label>
        <input type={"radio"} name="card" id="card" />
        <label htmlFor="card">휴대폰 결제</label>
        <input type={"radio"} name="card" id="card" />
        <label htmlFor="card">네이버 페이</label>
        <input type={"radio"} name="card" id="card" />
        <label htmlFor="card">카카오 페이</label>
      </PaymentTextWrapper>
      <article>zz</article>
    </OrderPaymentWrapper>
  );
};
export default OrderPayment;
