import animation from "./data/726-antenna.json";
import { Lordicon } from "./player.jsx";

export function Antenna(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Antenna;
