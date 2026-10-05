import animation from "./data/2452-airplane-takeoff.json";
import { Lordicon } from "./player.jsx";

export function AirplaneTakeoff(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default AirplaneTakeoff;
