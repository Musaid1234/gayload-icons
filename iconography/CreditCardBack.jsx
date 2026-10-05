import animation from "./data/392-credit-card-back.json";
import { Lordicon } from "./player.jsx";

export function CreditCardBack(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default CreditCardBack;
