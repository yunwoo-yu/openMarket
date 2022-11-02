import { ModalWrapper } from "./styled";
import { Button } from "../Button/Button";

const Modal = ({ children, rejectText1, resultText2 }) => {
  return (
    <ModalWrapper>
      <button className="modal-close-btn"></button>
      <p className="modal-text">{children}</p>
      <div className="modal-btn-box">
        <Button className="reject-btn">{rejectText1}</Button>
        <Button className="result-btn">{resultText2}</Button>
      </div>
    </ModalWrapper>
  );
};

export default Modal;
