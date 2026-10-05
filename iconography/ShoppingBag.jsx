import animation from "./data/2870-shopping-bag.json";
import { Lordicon } from "./player.jsx";

export function ShoppingBag(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ShoppingBag;
