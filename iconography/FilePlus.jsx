import animation from "./data/89-file-plus.json";
import { Lordicon } from "./player.jsx";

export function FilePlus(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default FilePlus;
