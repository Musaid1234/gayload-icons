import animation from "./data/44-avatar-circle.json";
import { Lordicon } from "./player.jsx";

export function AvatarCircle(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default AvatarCircle;
