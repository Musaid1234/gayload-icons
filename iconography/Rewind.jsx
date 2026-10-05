import animation from "./data/4237-rewind.json";
import { Lordicon } from "./player.jsx";

export function Rewind(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Rewind;
