import animation from "./data/1443-bullet-list.json";
import { Lordicon } from "./player.jsx";

export function BulletList(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default BulletList;
