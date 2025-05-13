import styled from "styled-components";
import { P } from "../../components/Text/styles";
export const SideBarContainer = styled.aside`
  position: sticky;
  top: 80px;
  left: 0;
  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`;
export const Description = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`;
export const BtnTheme = styled.button`
  width: 75px;
  height: 28px;
  font-size: 10px;
  font-weight: bold;
  color: ${(props) => props.theme.txtColor};
  background-color: ${(props) => props.theme.primaryColor};
  padding: 8px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
`;
