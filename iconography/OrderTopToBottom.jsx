import animation from "./data/2595-order-top-to-bottom.json";
import { Lordicon } from "./player.jsx";

export function OrderTopToBottom(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default OrderTopToBottom;
