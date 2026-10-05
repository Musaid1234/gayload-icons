import animation from "./data/452-plug.json";
import { Lordicon } from "./player.jsx";

export function Plug(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Plug;
