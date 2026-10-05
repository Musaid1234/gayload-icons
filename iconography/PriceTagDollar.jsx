import animation from "./data/101-price-tag-dollar.json";
import { Lordicon } from "./player.jsx";

export function PriceTagDollar(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default PriceTagDollar;
