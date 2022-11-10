import { OrderFormWrapper } from "./styled";
import { Button } from "../../common/Button/Button";
import TextField from "../../common/Input/TextField/TextField";

const OrderForm = ({ onPostCode, addressData }) => {
  return (
    <OrderFormWrapper>
      <h3>배송정보</h3>
      <form>
        <p>주문자 정보</p>
        <div>
          <TextField inputType={"text"} name={"orderer"} text={"이름"} />
        </div>
        <div className="phone-number">
          <TextField inputType={"text"} name={"phone_number"} text={"휴대폰"} />
        </div>
        <div>
          <TextField inputType={"text"} name={"email"} text={"이메일"} />
        </div>
      </form>
      <form>
        <p>배송지 정보</p>
        <div>
          <TextField inputType={"text"} name={"reciever"} text={"수령인"} />
        </div>
        <div className="phone-number">
          <TextField
            inputType={"text"}
            name={"reciever_phone_number"}
            text={"휴대폰"}
          />
        </div>
        <Button type="button" onClick={onPostCode}>
          우편번호 조회
        </Button>
      </form>
    </OrderFormWrapper>
  );
};

export default OrderForm;
