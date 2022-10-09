import Spinner from "../../../assets/spinner.gif";
import { LoadingWrapper } from "./styled";

const Loading = () => {
  return (
    <LoadingWrapper>
      <p>잠시만 기다려주세요.</p>
      <img src={Spinner} alt="로딩스피너" />
    </LoadingWrapper>
  );
};

export default Loading;
