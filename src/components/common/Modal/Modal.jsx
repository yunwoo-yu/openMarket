import { ModalWrapper } from "./styled";
import { Button } from "../Button/Button";

const Modal = ({
  children,
  rejectText,
  resultText,
  onClickReject,
  onClickResult,
}) => {
  return (
    <ModalWrapper>
      <button className="modal-close-btn" onClick={onClickReject}></button>
      <p className="modal-text">{children}</p>
      <div className="modal-btn-box">
        <Button className="reject-btn" onClick={onClickReject}>
          {rejectText}
        </Button>
        <Button className="result-btn" onClick={onClickResult}>
          {resultText}
        </Button>
      </div>
    </ModalWrapper>
  );
};

export default Modal;
