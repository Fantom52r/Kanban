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
