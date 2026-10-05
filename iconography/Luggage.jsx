import animation from "./data/3111-luggage.json";
import { Lordicon } from "./player.jsx";

export function Luggage(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Luggage;
