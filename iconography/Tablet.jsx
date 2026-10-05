import animation from "./data/4130-tablet.json";
import { Lordicon } from "./player.jsx";

export function Tablet(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Tablet;
