import { useNavigate } from "react-router-dom";
import Modal from "../../common/Modal/Modal";

const NotAuthCart = () => {
  const navigate = useNavigate();

  const onClickResult = () => {
    navigate("/login");
  };
  const onClickReject = () => {
    navigate("/");
  };

  return (
    <>
      <Modal
        resultText={"예"}
        rejectText={"아니요"}
        onClickResult={onClickResult}
        onClickReject={onClickReject}
      >
        장바구니는 로그인 이후 이용할 수 있습니다. 로그인 페이지로
        이동하시겠습니까?
      </Modal>
    </>
  );
};

export default NotAuthCart;
