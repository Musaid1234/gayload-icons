import animation from "./data/3117-browser-check.json";
import { Lordicon } from "./player.jsx";

export function BrowserCheck(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default BrowserCheck;
