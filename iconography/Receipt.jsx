import animation from "./data/2451-receipt.json";
import { Lordicon } from "./player.jsx";

export function Receipt(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Receipt;
