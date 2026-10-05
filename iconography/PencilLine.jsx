import animation from "./data/4062-pencil-line.json";
import { Lordicon } from "./player.jsx";

export function PencilLine(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default PencilLine;
