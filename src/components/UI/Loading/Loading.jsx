import { LoadingWrapper } from "./styled";

const Loading = () => {
  const publicUrl = process.env.PUBLIC_URL;

  return (
    <LoadingWrapper>
      <p>잠시만 기다려주세요.</p>
      <img src={`${publicUrl}/assets/spinner.gif`} alt="로딩스피너" />
    </LoadingWrapper>
  );
};

export default Loading;
