import animation from "./data/87-watch.json";
import { Lordicon } from "./player.jsx";

export function Watch(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Watch;
