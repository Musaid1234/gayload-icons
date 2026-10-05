import animation from "./data/464-headphones.json";
import { Lordicon } from "./player.jsx";

export function Headphones(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Headphones;
