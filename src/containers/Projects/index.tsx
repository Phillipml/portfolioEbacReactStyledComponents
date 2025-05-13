import Project from "../../components/Project";
import Title from "../../components/Title";
import { ProjectsList } from "./style";

const Projects = () => {
  return (
    <section>
      <Title fontSize={16}>Projetos</Title>
      <ProjectsList>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
      </ProjectsList>
    </section>
  );
};
export default Projects;
