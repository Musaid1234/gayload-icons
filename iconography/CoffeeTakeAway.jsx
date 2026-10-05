import animation from "./data/238-coffee-take-away.json";
import { Lordicon } from "./player.jsx";

export function CoffeeTakeAway(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default CoffeeTakeAway;
