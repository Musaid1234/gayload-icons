import animation from "./data/48-plus.json";
import { Lordicon } from "./player.jsx";

export function Plus(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Plus;
