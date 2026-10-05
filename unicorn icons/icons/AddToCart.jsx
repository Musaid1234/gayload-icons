import webmUrl from "../media/0147-add-to-cart.webm";
import svgUrl from "../media/0147-add-to-cart.svg";
import { UnicornIcon } from "../player.jsx";

export function AddToCart(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default AddToCart;
