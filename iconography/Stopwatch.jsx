import animation from "./data/46-stopwatch.json";
import { Lordicon } from "./player.jsx";

export function Stopwatch(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Stopwatch;
