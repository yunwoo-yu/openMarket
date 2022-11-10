import { OrderFormWrapper } from "./styled";
import { Button } from "../../common/Button/Button";
import Form from "../../common/Form/Form";
import { DefaultTextWrapper } from "../../common/Input/InputWrapper/DefaultTextWrapper";
import { PhoneTextWrapper } from "../../common/Input/InputWrapper/PhoneTextWrapper";
import { PostTextWrapper } from "../../common/Input/InputWrapper/PostTextWrapper";

const OrderForm = ({ onPostCode, addressData, formValue, onChange }) => {
  const {
    reciever,
    reciever_phone_number,
    reciever_phone_number2,
    reciever_phone_number3,
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
        <PhoneTextWrapper>
          <label htmlFor="phone">휴대폰</label>
          <input type="text" name="phone" id="phone" />
          <span>-</span>
          <input type="text" name="phone2" id="phone2" />
          <span>-</span>
          <input type="text" name="phone3" id="phone3" />
        </PhoneTextWrapper>
        <DefaultTextWrapper>
          <label htmlFor="email">이메일</label>
          <input type="text" name="email" id="email" />
        </DefaultTextWrapper>
        <p>배송지 정보</p>
        <DefaultTextWrapper>
          <label htmlFor="reciever">수령인</label>
          <input
            type="text"
            name="reciever"
            id="reciever"
            value={reciever}
            onChange={onChange}
          />
        </DefaultTextWrapper>
        <PhoneTextWrapper>
          <label htmlFor="reciever_phone_number">휴대폰</label>
          <input
            type="text"
            name="reciever_phone_number"
            id="reciever_phone_number"
            value={reciever_phone_number}
            onChange={onChange}
          />
          <span>-</span>
          <input
            type="text"
            name="reciever_phone_number2"
            id="reciever_phone_number2"
            value={reciever_phone_number2}
            onChange={onChange}
          />
          <span>-</span>
          <input
            type="text"
            name="reciever_phone_number3"
            id="reciever_phone_number3"
            value={reciever_phone_number3}
            onChange={onChange}
          />
        </PhoneTextWrapper>
        <PostTextWrapper>
          <label htmlFor="address">배송주소</label>
          <input
            type="text"
            name="address"
            id="address"
            value={address}
            onChange={onChange}
            readOnly
          />
          <Button type="button" onClick={onPostCode}>
            우편번호 조회
          </Button>
          <input type="text" value={address2} readOnly onChange={onChange} />
          <input
            type="text"
            value={address3}
            onChange={onChange}
            placeholder="(상세주소)"
          />
        </PostTextWrapper>
        <DefaultTextWrapper className="post-message">
          <label htmlFor=""> 배송 메시지</label>
          <input type="text" value={address_message} onChange={onChange} />
        </DefaultTextWrapper>
      </Form>
    </OrderFormWrapper>
  );
};

export default OrderForm;
