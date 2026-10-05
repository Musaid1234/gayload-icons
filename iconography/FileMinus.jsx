import animation from "./data/90-file-minus.json";
import { Lordicon } from "./player.jsx";

export function FileMinus(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default FileMinus;
