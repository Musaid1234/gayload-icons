import animation from "./data/2599-clipboard-code.json";
import { Lordicon } from "./player.jsx";

export function ClipboardCode(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ClipboardCode;
