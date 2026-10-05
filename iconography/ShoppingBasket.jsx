import animation from "./data/139-shopping-basket.json";
import { Lordicon } from "./player.jsx";

export function ShoppingBasket(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ShoppingBasket;
