import animation from "./data/3971-clipboard-text.json";
import { Lordicon } from "./player.jsx";

export function ClipboardText(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ClipboardText;
