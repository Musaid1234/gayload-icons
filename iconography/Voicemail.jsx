import animation from "./data/4012-voicemail.json";
import { Lordicon } from "./player.jsx";

export function Voicemail(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Voicemail;
