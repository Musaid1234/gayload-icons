import webmUrl from "../media/0136-shopping-bags.webm";
import svgUrl from "../media/0136-shopping-bags.svg";
import { UnicornIcon } from "../player.jsx";

export function ShoppingBags(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default ShoppingBags;
