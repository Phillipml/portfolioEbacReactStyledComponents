import { Title as TitleStyle } from "./styles";
export type Props = {
  title: string;
  fontSize?: number;
};
const Title = (props: Props) => (
  <TitleStyle fontSize={props.fontSize}>{props.title}</TitleStyle>
);

export default Title;
