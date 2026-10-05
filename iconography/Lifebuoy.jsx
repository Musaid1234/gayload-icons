import animation from "./data/475-lifebuoy.json";
import { Lordicon } from "./player.jsx";

export function Lifebuoy(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Lifebuoy;
