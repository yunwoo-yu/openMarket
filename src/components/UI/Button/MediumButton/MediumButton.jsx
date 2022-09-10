import styled from "styled-components";

export const MediumButton = styled.button`
  width: ${(props) => props.width || "480px"};
  padding: 19px 0;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  background: ${(props) => props.backgroundColor || "#21BF48"};
  border: none;
  border-radius: 5px;
  color: #fff;
`;
