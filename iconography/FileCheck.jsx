import animation from "./data/14-file-check.json";
import { Lordicon } from "./player.jsx";

export function FileCheck(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default FileCheck;
