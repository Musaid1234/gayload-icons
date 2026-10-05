import animation from "./data/4228-pen-nib.json";
import { Lordicon } from "./player.jsx";

export function PenNib(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default PenNib;
