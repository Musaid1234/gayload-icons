import animation from "./data/4226-smartwatch.json";
import { Lordicon } from "./player.jsx";

export function Smartwatch(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Smartwatch;
