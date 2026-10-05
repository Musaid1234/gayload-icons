import animation from "./data/1042-speakers.json";
import { Lordicon } from "./player.jsx";

export function Speakers(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Speakers;
