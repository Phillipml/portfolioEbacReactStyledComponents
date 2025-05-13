import { P } from "./styles";
export type Props = {
  children: string;
  txtType?: "primary" | "secondary";
  fontSize?: number;
};
const Text = ({ children, txtType = "primary", fontSize }: Props) => (
  <P txtType={txtType} fontSize={fontSize}>
    {children}
  </P>
);

export default Text;
