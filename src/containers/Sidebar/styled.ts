import styled from "styled-components";
import { P } from "../../components/Text/styles";
export const SideBarContainer = styled.aside`
  position: sticky;
  top: 80px;
  left: 0;
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
  color: #eeeeee;
  background-color: #282a35;
  padding: 8px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
`;
