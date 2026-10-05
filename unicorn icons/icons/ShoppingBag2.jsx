import webmUrl from "../media/0466-shopping-bag.webm";
import svgUrl from "../media/0466-shopping-bag.svg";
import { UnicornIcon } from "../player.jsx";

export function ShoppingBag2(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default ShoppingBag2;
