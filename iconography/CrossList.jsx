import animation from "./data/4386-cross-list.json";
import { Lordicon } from "./player.jsx";

export function CrossList(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default CrossList;
