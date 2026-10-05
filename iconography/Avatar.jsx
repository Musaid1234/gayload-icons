import animation from "./data/21-avatar.json";
import { Lordicon } from "./player.jsx";

export function Avatar(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Avatar;
