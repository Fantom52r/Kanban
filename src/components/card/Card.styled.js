import { colors } from "../../lib/Topic";
import styled from "styled-components";
export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  ${(props) => colors[props.$color]}
`;

export const CardThemeText = styled.p`
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
`;
