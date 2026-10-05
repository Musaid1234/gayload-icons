import webmUrl from "../media/0085-shopping-bag.webm";
import svgUrl from "../media/0085-shopping-bag.svg";
import { UnicornIcon } from "../player.jsx";

export function ShoppingBag(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default ShoppingBag;
