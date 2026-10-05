import animation from "./data/463-headset-microphone.json";
import { Lordicon } from "./player.jsx";

export function HeadsetMicrophone(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default HeadsetMicrophone;
