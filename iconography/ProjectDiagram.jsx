import animation from "./data/978-project-diagram.json";
import { Lordicon } from "./player.jsx";

export function ProjectDiagram(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ProjectDiagram;
