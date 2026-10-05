import animation from "./data/56-file-text.json";
import { Lordicon } from "./player.jsx";

export function FileText(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default FileText;
