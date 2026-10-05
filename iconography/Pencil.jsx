import animation from "./data/35-pencil.json";
import { Lordicon } from "./player.jsx";

export function Pencil(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Pencil;
