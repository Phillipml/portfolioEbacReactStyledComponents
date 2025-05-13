import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 16px;
`;

export const LinkBtn = styled.a`
  margin-top: 24px;
  color: ${(props) => props.theme.txtColor};
  font-size: 14px;
  background-color: ${(props) => props.theme.bgBtnColor};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
`;
