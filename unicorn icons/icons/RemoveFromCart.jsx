import webmUrl from "../media/0082-remove-from-cart.webm";
import svgUrl from "../media/0082-remove-from-cart.svg";
import { UnicornIcon } from "../player.jsx";

export function RemoveFromCart(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default RemoveFromCart;
