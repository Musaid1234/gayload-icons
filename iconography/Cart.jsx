import animation from "./data/146-cart.json";
import { Lordicon } from "./player.jsx";

export function Cart(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Cart;
