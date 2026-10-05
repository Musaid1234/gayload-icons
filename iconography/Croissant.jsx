import animation from "./data/574-croissant.json";
import { Lordicon } from "./player.jsx";

export function Croissant(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Croissant;
