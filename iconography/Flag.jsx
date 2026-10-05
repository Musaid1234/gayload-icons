import animation from "./data/469-flag.json";
import { Lordicon } from "./player.jsx";

export function Flag(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Flag;
