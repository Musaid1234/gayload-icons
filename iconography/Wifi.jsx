import animation from "./data/64-wifi.json";
import { Lordicon } from "./player.jsx";

export function Wifi(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Wifi;
