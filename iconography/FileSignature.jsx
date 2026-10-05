import animation from "./data/1019-file-signature.json";
import { Lordicon } from "./player.jsx";

export function FileSignature(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default FileSignature;
