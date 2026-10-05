import webmUrl from "../media/0158-order-on-the-way.webm";
import svgUrl from "../media/0158-order-on-the-way.svg";
import { UnicornIcon } from "../player.jsx";

export function OrderOnTheWay(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default OrderOnTheWay;
