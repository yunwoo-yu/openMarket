import styled from "styled-components";

export const FormWrapper = styled.form`
  label {
    width: 170px;
    line-height: 20px;
  }
  input {
    width: 334px;
    line-height: 20px;
    padding: 9px 5px;
    border: 1px solid #c4c4c4;

    &:focus {
      outline: 1px solid #21bf48;
    }
  }
`;
