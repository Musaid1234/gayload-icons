import animation from "./data/935-speedometer.json";
import { Lordicon } from "./player.jsx";

export function Speedometer(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Speedometer;
