import animation from "./data/2149-hashtag.json";
import { Lordicon } from "./player.jsx";

export function Hashtag(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Hashtag;
