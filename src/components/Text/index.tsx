import { P } from "./styles";
export type Props = {
  children: string;
  txtType?: "primary" | "secondary";
};
const Text = ({ children, txtType = "primary" }: Props) => (
  <P txtType={txtType}>{children}</P>
);

export default Text;
