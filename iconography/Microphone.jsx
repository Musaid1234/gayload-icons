import animation from "./data/188-microphone.json";
import { Lordicon } from "./player.jsx";

export function Microphone(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Microphone;
