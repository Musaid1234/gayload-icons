import animation from "./data/314-avatars-group.json";
import { Lordicon } from "./player.jsx";

export function AvatarsGroup(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default AvatarsGroup;
