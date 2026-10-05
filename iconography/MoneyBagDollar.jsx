import animation from "./data/414-money-bag-dollar.json";
import { Lordicon } from "./player.jsx";

export function MoneyBagDollar(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default MoneyBagDollar;
