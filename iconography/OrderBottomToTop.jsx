import animation from "./data/752-order-bottom-to-top.json";
import { Lordicon } from "./player.jsx";

export function OrderBottomToTop(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default OrderBottomToTop;
