import styled from "styled-components";

const Logostyled = styled.h1`
  width: ${(props) => props.width || "124px"};

  img {
    width: 100%;
  }
`;

const Logo = () => {
  const publicUrl = process.env.PUBLIC_URL;

  return (
    <Logostyled>
      <img src={`${publicUrl}/assets/Logo-hodu.png`} alt="로고 이미지" />
    </Logostyled>
  );
};
export default Logo;
