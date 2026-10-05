import webmUrl from "../media/0159-grocery-bag.webm";
import svgUrl from "../media/0159-grocery-bag.svg";
import { UnicornIcon } from "../player.jsx";

export function GroceryBag(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default GroceryBag;
