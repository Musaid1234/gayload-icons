import animation from "./data/13-pizza-slice.json";
import { Lordicon } from "./player.jsx";

export function PizzaSlice(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default PizzaSlice;
