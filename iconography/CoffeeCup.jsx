import animation from "./data/239-coffee-cup.json";
import { Lordicon } from "./player.jsx";

export function CoffeeCup(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default CoffeeCup;
