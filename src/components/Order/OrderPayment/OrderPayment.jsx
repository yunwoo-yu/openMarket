import { PaymentTextWrapper } from "../../common/Input/InputWrapper/PaymentTextWrapper";
import { OrderPaymentWrapper } from "./styled";

const OrderPayment = () => {
  return (
    <OrderPaymentWrapper>
      <h3 className="payment-title">결제수단</h3>
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
      <article>
        <h4>최종결제 정보</h4>
        <div className="payment-result-box"></div>
      </article>
    </OrderPaymentWrapper>
  );
};
export default OrderPayment;
