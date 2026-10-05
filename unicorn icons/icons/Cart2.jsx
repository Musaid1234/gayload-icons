import webmUrl from "../media/0428-cart.webm";
import svgUrl from "../media/0428-cart.svg";
import { UnicornIcon } from "../player.jsx";

export function Cart2(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Cart2;
