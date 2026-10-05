import animation from "./data/407-crown.json";
import { Lordicon } from "./player.jsx";

export function Crown(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Crown;
