import animation from "./data/3096-pause.json";
import { Lordicon } from "./player.jsx";

export function Pause(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Pause;
