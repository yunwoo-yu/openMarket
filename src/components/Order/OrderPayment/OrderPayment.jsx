import { Button } from "../../common/Button/Button";
import { PaymentTextWrapper } from "../../common/Input/InputWrapper/PaymentTextWrapper";
import { FinalPaymentWrapper, OrderPaymentWrapper } from "./styled";

const OrderPayment = ({
  data,
  onClick,
  onSubmit,
  setIsCheckBox,
  isCheckBox,
}) => {
  const convertedTotalPrice = data
    .reduce((acc, cur) => {
      acc += cur.price * cur.quantity;
      acc += cur.shipping_fee;

      return acc;
    }, 0)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const convertedTotalShippingFee = data
    .reduce((acc, cur) => {
      acc += cur.shipping_fee;

      return acc;
    }, 0)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const convertedProductPrice = data
    .reduce((acc, cur) => {
      acc += cur.price * cur.quantity;

      return acc;
    }, 0)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <OrderPaymentWrapper>
      <h3 className="hidden">결제 수단</h3>
      <div className="payment-how">
        <p className="payment-title">결제수단</p>
        <PaymentTextWrapper>
          <input
            type={"radio"}
            name="payment_method"
            id="CARD"
            onClick={onClick}
          />
          <label htmlFor="CARD">신용/체크카드</label>
          <input
            type={"radio"}
            name="payment_method"
            id="DEPOSIT"
            onClick={onClick}
          />
          <label htmlFor="DEPOSIT">무통장 입금</label>
          <input
            type={"radio"}
            name="payment_method"
            id="PHONE_PAYMENT"
            onClick={onClick}
          />
          <label htmlFor="PHONE_PAYMENT">휴대폰 결제</label>
          <input
            type={"radio"}
            name="payment_method"
            id="NAVERPAY"
            onClick={onClick}
          />
          <label htmlFor="NAVERPAY">네이버 페이</label>
          <input
            type={"radio"}
            name="payment_method"
            id="KAKAOPAY"
            onClick={onClick}
          />
          <label htmlFor="KAKAOPAY">카카오 페이</label>
        </PaymentTextWrapper>
      </div>
      <div className="payment-result-box">
        <p>최종결제 정보</p>
        <FinalPaymentWrapper>
          <p>
            - 상품금액
            <strong>{convertedProductPrice}</strong>
            <span>원</span>
          </p>
          <p>
            - 할인금액
            <strong>0</strong>
            <span>원</span>
          </p>
          <p>
            - 배송비
            <strong>{convertedTotalShippingFee}</strong>
            <span>원</span>
          </p>
          <p className="total-price">
            - 결제금액
            <strong>{convertedTotalPrice}원</strong>
          </p>
          <div className="consent">
            <input
              type="checkbox"
              name="consent"
              id="consent"
              onClick={() => {
                setIsCheckBox((prev) => !prev);
              }}
            />
            <label htmlFor="consent">
              주문 내용을 확인하였으며, 정보 제공 등에 동의 합니다.
            </label>
            <Button
              size="large"
              type="submit"
              form="payment-submit"
              onClick={onSubmit}
              disabled={isCheckBox}
            >
              결제하기
            </Button>
          </div>
        </FinalPaymentWrapper>
      </div>
    </OrderPaymentWrapper>
  );
};
export default OrderPayment;
