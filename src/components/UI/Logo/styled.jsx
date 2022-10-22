import styled from "styled-components";

export const LogoWrapper = styled.article`
  margin: ${(props) => props.margin || "100px auto 70px"};
  > a {
    width: 100%;
    display: block;
    text-align: center;
    > img {
      width: 238px;
    }
  }
`;
