import animation from "./data/1103-confetti.json";
import { Lordicon } from "./player.jsx";

export function Confetti(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Confetti;
