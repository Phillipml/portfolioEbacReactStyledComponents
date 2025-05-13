import Avatar from "../../components/Avatar";
import Text from "../../components/Text";
import Title from "../../components/Title";
import { Description, BtnTheme, SideBarContainer } from "./styled";

type Props = {
  changeTheme: () => void;
};

const Sidebar = (props: Props) => {
  return (
    <aside>
      <SideBarContainer>
        <Avatar />
        <Title fontSize={20}>Phillip Menezes</Title>
        <Text txtType="secondary" fontSize={16}>
          Phillipml
        </Text>
        <Description txtType="primary" fontSize={12}>
          Full Stack Developer
        </Description>
        <BtnTheme onClick={props.changeTheme}>Trocar tema</BtnTheme>
      </SideBarContainer>
    </aside>
  );
};
export default Sidebar;
