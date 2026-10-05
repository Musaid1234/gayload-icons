import animation from "./data/45-clock.json";
import { Lordicon } from "./player.jsx";

export function Clock(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Clock;
