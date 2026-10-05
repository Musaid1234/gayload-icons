import animation from "./data/4214-send-horizontal.json";
import { Lordicon } from "./player.jsx";

export function SendHorizontal(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default SendHorizontal;
