import animation from "./data/4014-calculator-simple.json";
import { Lordicon } from "./player.jsx";

export function CalculatorSimple(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default CalculatorSimple;
