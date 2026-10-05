import animation from "./data/378-copy.json";
import { Lordicon } from "./player.jsx";

export function Copy(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Copy;
