import animation from "./data/413-money-bag.json";
import { Lordicon } from "./player.jsx";

export function MoneyBag(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default MoneyBag;
