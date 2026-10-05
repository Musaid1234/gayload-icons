import animation from "./data/75-share.json";
import { Lordicon } from "./player.jsx";

export function Share(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Share;
