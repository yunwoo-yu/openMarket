import { OrderFormWrapper } from "./styled";
import { Button } from "../../common/Button/Button";

const OrderForm = ({ onPostCode, addressData }) => {
  return (
    <OrderFormWrapper>
      <h3>배송정보</h3>
      <form>
        <div>
          <p>주문자 정보</p>
          <label htmlFor="">이름</label>
          <input type="text" />
          <label htmlFor="">휴대폰</label>
          <input type="text" />
          <label htmlFor="">이메일</label>
          <input type="text" />
        </div>
        <div>
          <p>배송지 정보</p>
          <label htmlFor="">수령인</label>
          <input type="text" />
          <label htmlFor="">휴대폰</label>
          <input type="text" />
          <div>
            <input type="text" className="zonecode" />
            <label htmlFor="">배송주소</label>
            <Button type="button" onClick={onPostCode}>
              우편번호 조회
            </Button>
            <input type="text" readOnly defaultValue={addressData.address} />
            <input type="text" />
          </div>
          <label htmlFor="">배송 메세지</label>
          <input type="text" />
        </div>
      </form>
    </OrderFormWrapper>
  );
};

export default OrderForm;
