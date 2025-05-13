import Text from "../../components/Text";
import Title from "../../components/Title";
import GitSection from "./styles";

const About = () => {
  return (
    <section>
      <Title fontSize={16}>Sobre Mim</Title>
      <Text txtType="secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quam
        maxime debitis? Omnis hic placeat, dolores rem assumenda et provident
        magni ipsam, consectetur, a repellat similique facere porro suscipit
        dicta.
      </Text>
      <GitSection>
        <img src="https://github-readme-stats.vercel.app/api?username=Phillipml&theme=merko&show_icons=true" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Phillipml&layout=compact&langs_count=7&theme=merko" />
      </GitSection>
    </section>
  );
};
export default About;
