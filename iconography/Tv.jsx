import animation from "./data/1757-tv.json";
import { Lordicon } from "./player.jsx";

export function Tv(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Tv;
