import animation from "./data/1590-hand-drop.json";
import { Lordicon } from "./player.jsx";

export function HandDrop(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default HandDrop;
