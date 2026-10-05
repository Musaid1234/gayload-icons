import animation from "./data/346-devices.json";
import { Lordicon } from "./player.jsx";

export function Devices(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Devices;
