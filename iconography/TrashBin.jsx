import animation from "./data/185-trash-bin.json";
import { Lordicon } from "./player.jsx";

export function TrashBin(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default TrashBin;
