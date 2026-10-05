import animation from "./data/236-alarm.json";
import { Lordicon } from "./player.jsx";

export function Alarm(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Alarm;
