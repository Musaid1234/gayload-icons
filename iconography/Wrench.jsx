import animation from "./data/409-wrench.json";
import { Lordicon } from "./player.jsx";

export function Wrench(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Wrench;
