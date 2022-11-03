import Plus from "../../../assets/icon-plus-line.svg";
import MaxNumPuls from "../../../assets/icon-plus-line-white.svg";
import Minus from "../../../assets/icon-minus-line.svg";
import { QuantityButtonWrapper } from "./styled";

const QuantityButton = ({ num, maxNum, onClickMinus, onClickPlus }) => {
  return (
    <QuantityButtonWrapper className="quantity-box">
      <button onClick={onClickMinus}>
        <img src={Minus} alt="수량 감소" />
      </button>
      <span>{num}</span>
      <button disabled={maxNum === num} onClick={onClickPlus}>
        <img src={maxNum === num ? MaxNumPuls : Plus} alt="수량 증가" />
      </button>
    </QuantityButtonWrapper>
  );
};

export default QuantityButton;
