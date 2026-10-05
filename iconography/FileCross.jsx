import animation from "./data/91-file-cross.json";
import { Lordicon } from "./player.jsx";

export function FileCross(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default FileCross;
