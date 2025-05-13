import styled from "styled-components";
import { Props } from ".";

export const P = styled.p<Props>`
  color: ${(props) =>
    props.txtType === "primary"
      ? props.theme.primaryColor
      : props.theme.secondaryColor};
  font-size: ${(props) => props.fontSize || 14}px;
  line-height: 22px;
`;
