import { OrderFormWrapper } from "./styled";
import { Button } from "../../common/Button/Button";
import Form from "../../common/Form/Form";
import { DefaultTextWrapper } from "../../common/Input/InputWrapper/DefaultTextWrapper";
import { PostTextWrapper } from "../../common/Input/InputWrapper/PostTextWrapper";

const OrderForm = ({ onPostCode, formValue, onChange, errors }) => {
  const {
    receiver,
    receiver_phone_number,
    address,
    address2,
    address3,
    address_message,
  } = formValue;

  return (
    <OrderFormWrapper>
      <h3>배송정보</h3>
      <Form>
        <p>주문자 정보</p>
        <DefaultTextWrapper>
          <label htmlFor="username">이름</label>
          <input type="text" name="username" id="username" />
        </DefaultTextWrapper>
        <DefaultTextWrapper>
          <label htmlFor="phone">휴대폰</label>
          <input type="text" name="phone" id="phone" />
        </DefaultTextWrapper>
        <DefaultTextWrapper>
          <label htmlFor="email">이메일</label>
          <input type="text" name="email" id="email" />
        </DefaultTextWrapper>
        <p>배송지 정보</p>
        <DefaultTextWrapper>
          <label htmlFor="receiver">수령인</label>
          <input
            type="text"
            name="receiver"
            id="receiver"
            value={receiver}
            onChange={onChange}
          />
          {errors.receiver && <span>{errors.receiver}</span>}
        </DefaultTextWrapper>
        <DefaultTextWrapper>
          <label htmlFor="receiver_phone_number">휴대폰</label>
          <input
            type="text"
            name="receiver_phone_number"
            id="receiver_phone_number"
            value={receiver_phone_number}
            onChange={onChange}
          />
          {errors.receiver_phone_number && (
            <span>{errors.receiver_phone_number}</span>
          )}
        </DefaultTextWrapper>
        <PostTextWrapper>
          <label htmlFor="address">배송주소</label>
          <input
            type="text"
            name="address"
            id="address"
            value={address}
            onChange={onChange}
          />
          <Button type="button" onClick={onPostCode}>
            우편번호 조회
          </Button>
          <input type="text" value={address2} onChange={onChange} />
          <input
            type="text"
            name="address3"
            value={address3}
            onChange={onChange}
            placeholder="(상세주소)"
          />
          {errors.address && <p className="errors-message">{errors.address}</p>}
        </PostTextWrapper>
        <DefaultTextWrapper className="post-message">
          <label htmlFor="">배송 메시지</label>
          <input
            type="text"
            value={address_message}
            name="address_message"
            onChange={onChange}
          />
          {errors.address_message && <span>{errors.address_message}</span>}
        </DefaultTextWrapper>
      </Form>
    </OrderFormWrapper>
  );
};

export default OrderForm;
