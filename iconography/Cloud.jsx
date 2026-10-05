import animation from "./data/1-cloud.json";
import { Lordicon } from "./player.jsx";

export function Cloud(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Cloud;
