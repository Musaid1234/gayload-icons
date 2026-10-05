import webmUrl from "../media/0448-order-placed.webm";
import svgUrl from "../media/0448-order-placed.svg";
import { UnicornIcon } from "../player.jsx";

export function OrderPlaced(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default OrderPlaced;
