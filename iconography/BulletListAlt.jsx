import animation from "./data/4385-bullet-list-alt.json";
import { Lordicon } from "./player.jsx";

export function BulletListAlt(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default BulletListAlt;
