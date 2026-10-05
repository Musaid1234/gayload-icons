import animation from "./data/426-brain.json";
import { Lordicon } from "./player.jsx";

export function Brain(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Brain;
