import webmUrl from "../media/0430-add-to-cart.webm";
import svgUrl from "../media/0430-add-to-cart.svg";
import { UnicornIcon } from "../player.jsx";

export function AddToCart2(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default AddToCart2;
