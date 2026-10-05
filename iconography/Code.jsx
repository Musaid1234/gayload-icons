import animation from "./data/369-code.json";
import { Lordicon } from "./player.jsx";

export function Code(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Code;
