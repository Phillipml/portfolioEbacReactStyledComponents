import styled from "styled-components";
type Styles = {
  fontSize?: number;
};
export const Title = styled.h3<Styles>`
  color: ${(props) => props.theme.primaryColor};
  font-size: ${({ fontSize }) => fontSize || 14}px;
  font-weight: bold;
  margin-bottom: 24px;
`;
