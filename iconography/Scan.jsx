import animation from "./data/370-scan.json";
import { Lordicon } from "./player.jsx";

export function Scan(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Scan;
