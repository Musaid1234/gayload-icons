import animation from "./data/4236-stop.json";
import { Lordicon } from "./player.jsx";

export function Stop(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Stop;
