import webmUrl from "../media/0162-cart.webm";
import svgUrl from "../media/0162-cart.svg";
import { UnicornIcon } from "../player.jsx";

export function Cart(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Cart;
