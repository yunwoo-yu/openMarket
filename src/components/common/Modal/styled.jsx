import styled from "styled-components";
import closeIcon from "../../../assets/icon-delete.svg";

export const ModalWrapper = styled.article`
  width: 360px;
  height: 200px;
  padding: 50px 0 40px;
  background: #fff;
  border: 1px solid #c4c4c4;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9000;

  button {
    cursor: pointer;
  }

  .modal-close-btn {
    width: 22px;
    height: 22px;
    padding: 0;
    margin: 0;
    position: absolute;
    right: 18px;
    top: 18px;
    background: none;
    border: none;
    background-image: url(${closeIcon});
    background-position: center center;
  }
  .modal-text {
    width: 231px;
    font-size: 16px;
    line-height: 20px;
    margin: 0 auto;
    text-align: center;
    word-break: keep-all;
  }

  .modal-btn-box {
    width: 210px;
    margin: 30px auto 0;
    display: flex;
    gap: 10px;

    button {
      width: 100px;
      border-radius: 5px;
    }
  }
  .reject-btn {
    background-color: #fff;
    color: #767676;
    border: 1px solid #c4c4c4;
  }
`;
