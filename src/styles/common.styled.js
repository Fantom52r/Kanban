import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #f1f1f1;
`;
export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const Hover01 = css`
  &:hover {
    background-color: #33399b;
  }
`;

export const Hover02 = css`
  &:hover {
    color: #33399b;
    &::after {
        border-left-color: #33399b;
        border-bottom-color: #33399b;
    }
  }
`;

export const Hover03 = css`
  &:hover {
    background-color: #33399b;
    color: #FFFFFF;
    & a {color: #FFFFFF;}
  }
`;

export const Modal = styled.div`

`
export const ModalBlock = styled.div`

`

export const ModalTitle = styled.div`

`
export const ModalForm = styled.form`
 width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & input:first-child {
  margin-bottom: 7px;
}
` 
export const ModalInput = styled.input`
width: 100%;
  min-width: 100%;
  border-radius: 8px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  outline: none;
  padding: 10px 8px;
  &::placeholder {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.28px;
  color: #94A6BE;
}
`

export const ModalFormGroup = styled.div`

`
export const ModalEnterButton = styded.button`

`

export const ModalContainer = styled.div`

`