import animation from "./data/374-butt.json";
import { Lordicon } from "./player.jsx";

export function Butt(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Butt;
