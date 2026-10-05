import animation from "./data/114-scissors.json";
import { Lordicon } from "./player.jsx";

export function Scissors(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Scissors;
